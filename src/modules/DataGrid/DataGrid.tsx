import { Capsule } from '@models';
import { AppDispatch, CapsulesState, fetchCapsules, LoadingStages, RootState } from '@store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DataGridItem } from './DataGridItem';

type DataGridProps = {
  capsules: Capsule[];
};

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
    <div className="my-3 mx-auto flex flex-row flex-wrap items-center justify-between p-5">
      {capsules.slice(0, 5).map((capsule) => {
        return (
          <div className="m-4 min-w-[20%]">
            <DataGridItem capsule={capsule} key={capsule.capsuleId} />
          </div>
        );
      })}
    </div>
  ) : (
    <></>
  );
};
