import { Capsule } from '@models';

import { FiltersState } from '../Filters';

export const applyFilter = (capsules: Capsule[], filterState: FiltersState) => {
  let filteredCapsules: Capsule[] = [];

  capsules.forEach((capsule) => {
    for (let [key, filterOptions] of Object.entries(filterState)) {
      if (
        //@ts-ignore
        filterOptions.map((opt) => opt.value).includes(capsule[key])
      ) {
        filteredCapsules.push(capsule);
      }
    }
  });

  //handle case when all filters are cleared
  if (!filteredCapsules.length) {
    filteredCapsules = capsules;
  }

  return filteredCapsules;
};
