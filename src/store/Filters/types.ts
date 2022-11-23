export enum Filters {
  STATUS = "status",
  ORIGINAL_LAUNCH = "original_launch",
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
