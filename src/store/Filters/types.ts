export enum Filters {
  STATUS = "status",
  ORIGINAL_LAUNCH = "originalLaunch",
  TYPE = "type",
}

export type FiltersState = {
  [key in Filters]: FilterOption[];
};

export type FilterOption = {
  label: string;
  value: string;
};

export type PayLoad = {
  filterType: Filters;
  filterOptions: FilterOption[];
};
