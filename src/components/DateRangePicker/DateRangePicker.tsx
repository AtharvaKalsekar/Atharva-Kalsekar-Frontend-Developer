import { AppDispatch, Filters, setFilters } from '@store';
import { useCallback, useState } from 'react';
import { DateRangePicker as RDateRangePicker } from 'react-date-range';
import { useDispatch } from 'react-redux';

import Button from '../Button/Button';

const initialState = {
  startDate: new Date(),
  endDate: new Date(),
};

export const DateRangePicker = () => {
  const [range, setRange] = useState(initialState);
  const [showPicker, setShowPicker] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const onChange = useCallback((val: any) => {
    setRange(val.selection);
  }, []);

  const togglePicker = useCallback(() => {
    setShowPicker(!showPicker);
  }, [showPicker]);

  const onClickCancel = useCallback(() => {
    setShowPicker(false);
  }, []);

  const onClickClear = useCallback(() => {
    setRange(initialState);
  }, []);

  const onClickApply = useCallback(() => {
    dispatch(
      setFilters({
        filterType: Filters.DATE_RANGE,
        filterOptions: {
          ...range,
        },
      })
    );
    setShowPicker(false);
  }, [dispatch, range]);

  return (
    <>
      <Button buttonType="primary" onClick={togglePicker} className="m-3">
        Date range picker
      </Button>
      {showPicker && (
        <div className="absolute m-2 flex w-fit flex-col overflow-hidden rounded-md border border-solid border-black">
          <RDateRangePicker
            ranges={[{ ...range, key: "selection" }]}
            onChange={onChange}
          />
          <div className="flex flex-row items-center justify-end gap-3 border border-t-black p-4">
            <Button
              className="text-sm"
              onClick={onClickCancel}
              buttonType="secondary"
            >
              Cancel
            </Button>
            <Button
              className="text-sm"
              onClick={onClickClear}
              buttonType="danger"
            >
              Clear
            </Button>
            <Button
              className="text-sm"
              onClick={onClickApply}
              buttonType="success"
            >
              Apply
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
