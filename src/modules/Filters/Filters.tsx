import { DateRangePicker } from '@components';
import { AppDispatch, filterCapsules, FiltersState, RootState } from '@store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StatusFilter } from './StatusFilter';
import { TypeFilter } from './TypeFilter';

export const Filters = () => {
  const filterOptions = useSelector<RootState, FiltersState>(
    (state) => state.filters
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(filterCapsules(filterOptions));
  }, [dispatch, filterOptions]);

  return (
    <div className="flex w-full flex-col items-center gap-3 p-5 sm:flex-row sm:flex-wrap">
      <div className="w-full sm:flex-1">
        <StatusFilter />
      </div>
      <div className="w-full sm:flex-1">
        <TypeFilter />
      </div>
      <div className="w-full sm:flex-1">
        <DateRangePicker />
      </div>
    </div>
  );
};
