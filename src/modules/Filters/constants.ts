import { CapsuleStatus } from '@models';
import { FilterOption } from '@store';

export const CAPSULE_STATUS_FILTER_OPTIONS: FilterOption[] = [
  {
    label: CapsuleStatus.ACTIVE,
    value: CapsuleStatus.ACTIVE,
  },
  {
    label: CapsuleStatus.RETIRED,
    value: CapsuleStatus.RETIRED,
  },
  {
    label: CapsuleStatus.DESTROYED,
    value: CapsuleStatus.DESTROYED,
  },
  {
    label: CapsuleStatus.UNKNOWN,
    value: CapsuleStatus.UNKNOWN,
  },
];
