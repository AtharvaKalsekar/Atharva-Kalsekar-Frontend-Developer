import { usePaginationContext } from '../Pagination';
import { DataGridItem } from './DataGridItem';

export const DataGrid = () => {
  const { itemsToDisplay: capsules } = usePaginationContext();

  return capsules ? (
    <div className="grid h-[620px] grid-cols-2 items-start sm:grid-cols-3 md:grid-cols-4">
      {capsules.map((capsule, index) => {
        return (
          <div
            className="m-4 flex min-w-[20%] items-center justify-center"
            key={`${capsule.capsuleId}_${index}`}
          >
            <DataGridItem capsule={capsule} />
          </div>
        );
      })}
    </div>
  ) : (
    <></>
  );
};
