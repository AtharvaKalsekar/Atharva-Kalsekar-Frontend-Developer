import { Capsule } from '@models';
import { useEffect } from 'react';

import { usePaginationContext } from '../Pagination';
import { DataGridItem } from './DataGridItem';

type DataGridProps = {
  capsules: Capsule[];
};

export const DataGrid = () => {
  const { itemsToDisplay: capsules } = usePaginationContext();

  return capsules ? (
    <div className="my-3 mx-auto flex flex-row flex-wrap items-center justify-between p-5">
      {capsules.map((capsule) => {
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
