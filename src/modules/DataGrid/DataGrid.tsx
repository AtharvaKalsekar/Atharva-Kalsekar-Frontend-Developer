import { AppDispatch, CapsulesState, fetchCapsules, LoadingStages, RootState } from '@store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DataGridItem } from './DataGridItem';

export const DataGrid = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { capsules, loading } = useSelector<RootState, CapsulesState>(
    (state) => state.capsules
  );

  useEffect(() => {
    dispatch(fetchCapsules());
  }, [dispatch]);

  if (loading === LoadingStages.PENDING) {
    return <div>Loading ...</div>;
  }

  return capsules ? (
    <div className="my-3 p-5">
      <DataGridItem capsule={capsules[0] || { missions: [] }} />
    </div>
  ) : (
    <></>
  );
};
