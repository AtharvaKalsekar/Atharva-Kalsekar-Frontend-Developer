import { useCallback, useState } from 'react';
import { DateRangePicker as RDateRangePicker } from 'react-date-range';

import Button from '../Button/Button';

const initialState = {
  startDate: new Date(),
  endDate: new Date(),
};

export const DateRangePicker = () => {
  const [range, setRange] = useState(initialState);
  const [showPicker, setShowPicker] = useState(false);

  const onChange = useCallback((val: any) => {
    console.log({ val });
    setRange(val.selection);
  }, []);

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

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
            <Button buttonType="secondary">Cancel</Button>
            <Button buttonType="danger">Clear</Button>
            <Button buttonType="success">Apply</Button>
          </div>
        </div>
      )}
    </>
  );
};
