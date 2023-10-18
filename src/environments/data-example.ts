import { emptyMonth, RawData } from './data.model';

// Copy this data file to data.ts and supply actual data, this is just an example
export const DATA = {
  2022: {
    leap: false,
    months: [
      emptyMonth(31), // January
      emptyMonth(28), // February
      emptyMonth(31), // March
      emptyMonth(30), // April
      emptyMonth(31), // May
      emptyMonth(30), // June
      emptyMonth(31), // July
      emptyMonth(31), // August
      emptyMonth(30), // September
      emptyMonth(31), // October
      emptyMonth(30), // November
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        [2,4,1],
        [0,0,2],
        [3,3,2],
        [3,1,5],
      ], // December with 27 not-played days and 4 played days
    ]
  },
} as RawData;
