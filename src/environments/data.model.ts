export interface YearData {
  leap: boolean;
  months: (number[] | null)[][];
}

export interface RawData {
  [year: number]: YearData;
}

export function emptyMonth(days: number): (number[] | null)[] {
  const month = new Array(days);
  month.fill(null);
  return month;
}
