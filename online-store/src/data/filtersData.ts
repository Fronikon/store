import { FiltersType } from "../types/types";

export const PROPERTIES_FILTERS = {
  manufacturers: ['TERRIS', 'Homage', 'Fante', 'Belucci', 'Belucci', 'Belucci', 'Belucci', 'Belucci', 'Belucci'],
  colors: ['Classic', 'White', 'Red', 'Black'],
  frets: ['18', '19', '20', '21', '22']
};

export const INITIAL_FILTERS: FiltersType = {
  count: [1, 100],
  year: [1999, 2022],
  manufacturer: [],
  color: [],
  fretsCount: [],
  isOnlyPopular: false
};