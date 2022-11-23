import { Mission } from './Mission';

export enum CapsuleStatus {
  ACTIVE = "active",
  DESTROYED = "destroyed",
  RETIRED = "retired",
  UNKNOWN = "unknown",
}

export type Capsule = {
  capsuleSerial: string;
  capsuleId: string;
  capsuleStatus: CapsuleStatus;
  originalLaunch: string;
  originalLaunchUnix: number;
  missions: Mission[];
  landings: number;
  type: string;
  details: string;
  reuse_count: number;
};
