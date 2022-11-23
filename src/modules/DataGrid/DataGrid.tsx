import { AppDispatch, CapsulesState, fetchCapsules, RootState } from '@store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const DataGrid = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { capsules, loading } = useSelector<RootState, CapsulesState>(
    (state) => state.capsules
  );

  useEffect(() => {
    dispatch(fetchCapsules());
  }, [dispatch]);
  return <div>DataGrid</div>;
};
