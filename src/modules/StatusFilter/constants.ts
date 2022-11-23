export enum CapsuleStatus {
  ACTIVE = "active",
  DESTROYED = "destroyed",
  RETIRED = "retired",
  UNKNOWN = "unknown",
}

export const CAPSULE_STATUS_FILTER_OPTIONS = [
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
