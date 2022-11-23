import { Capsule } from '@models';

import { FiltersState } from '../Filters';

const isSatisfyingFilters = (
  capsule: Capsule,
  { status, type }: FiltersState
) => {
  return (
    (status.length
      ? status.find(({ value }) => value === capsule.status)
      : true) &&
    (type.length ? type.find(({ value }) => value === capsule.type) : true)
  );
};

const areAllFiltersClear = ({ status, type, originalLaunch }: FiltersState) => {
  return !!status.length && !!type.length && !!originalLaunch.length;
};

export const applyFilter = (capsules: Capsule[], filterState: FiltersState) => {
  let filteredCapsules: Capsule[] = [];

  if (areAllFiltersClear(filterState)) {
    return capsules;
  }

  capsules.forEach((capsule, index) => {
    if (
      isSatisfyingFilters(capsule, filterState) &&
      !filteredCapsules.includes(capsules[index])
    ) {
      filteredCapsules.push(capsules[index]);
    }
  });

  return filteredCapsules;
};
