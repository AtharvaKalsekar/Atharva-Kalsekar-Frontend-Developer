import { AppDispatch, filterCapsules, FiltersState, RootState } from '@store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StatusFilter } from './StatusFilter';

export const Filters = () => {
  const filterOptions = useSelector<RootState, FiltersState>(
    (state) => state.filters
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(filterCapsules(filterOptions));
  }, [dispatch, filterOptions]);

  return (
    <div>
      <StatusFilter />
    </div>
  );
};
