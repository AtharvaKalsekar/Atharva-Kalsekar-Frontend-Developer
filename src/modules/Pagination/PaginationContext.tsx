import { Capsule } from '@models';
import { AppDispatch, CapsulesState, fetchCapsules, RootState } from '@store';
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Footer from './Footer';

type PaginationState = {
  totalNumberOfItems: number;
  currentPage: number;
  numberOfItemsPerPage: number;
  totalNumberOfPages: number;
  onClickPage: (pageNumber: number) => void;
  onClickNextPage: () => void;
  onClickPreviousPage: () => void;
  isFirstPage: boolean;
  isLastPage: boolean;
  itemsToDisplay: Capsule[];
};

const PaginationContext = createContext<PaginationState | null>(null);

export const usePaginationContext = () => {
  const ctx = useContext(PaginationContext);
  if (!ctx) {
    throw new Error("Use this hook inside PaginationContextProvider");
  }
  return ctx;
};

type PaginationContextProps = {
  children: ReactNode | ReactNode[];
};

export const PaginationContextProvider = ({
  children,
}: PaginationContextProps) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCapsules());
  }, [dispatch]);

  const { filteredCapsules } = useSelector<RootState, CapsulesState>(
    (state) => state.capsules
  );

  const [currentPage, setCurrentPage] = useState(1);

  const numberOfItemsPerPage = 6;

  const isLastPage = useMemo(
    () =>
      currentPage === Math.ceil(filteredCapsules.length / numberOfItemsPerPage),
    [currentPage, filteredCapsules.length]
  );

  const onClickPage = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  const onClickNextPage = useCallback(() => {
    !isLastPage && setCurrentPage(currentPage + 1);
  }, [currentPage, isLastPage]);

  const onClickPreviousPage = useCallback(() => {
    currentPage !== 1 && setCurrentPage(currentPage - 1);
  }, [currentPage]);

  const itemsToDisplay = useMemo(() => {
    const offset = (currentPage - 1) * numberOfItemsPerPage;
    const startIndex = offset;
    const endIndex = offset + numberOfItemsPerPage;
    return filteredCapsules.slice(startIndex, endIndex);
  }, [currentPage, filteredCapsules]);

  const value: PaginationState = useMemo(
    () => ({
      totalNumberOfItems: filteredCapsules.length,
      totalNumberOfPages: Math.ceil(
        filteredCapsules.length / numberOfItemsPerPage
      ),
      numberOfItemsPerPage,
      currentPage,
      onClickPage,
      onClickNextPage,
      onClickPreviousPage,
      isFirstPage: currentPage === 1,
      isLastPage,
      itemsToDisplay,
    }),
    [
      currentPage,
      filteredCapsules,
      isLastPage,
      itemsToDisplay,
      onClickNextPage,
      onClickPage,
      onClickPreviousPage,
    ]
  );

  return (
    <PaginationContext.Provider value={value}>
      {filteredCapsules.length ? (
        <>
          {children}
          <Footer />
        </>
      ) : null}
    </PaginationContext.Provider>
  );
};
