import { SelectField } from '@components';

import { CAPSULE_STATUS_FILTER_OPTIONS } from './constants';

export const StatusFilter = () => {
  return <SelectField options={CAPSULE_STATUS_FILTER_OPTIONS} isMulti={true} />;
};
