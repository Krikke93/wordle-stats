export class MonthStructure {
  name: string;
  amountOfDays: number;

  constructor(name: string, amountOfDays: number) {
    this.name = name;
    this.amountOfDays = amountOfDays;
  }
}

export type YearStructure = MonthStructure[];

export const YEAR_STRUCTURE = [
  new MonthStructure('January', 31),
  new MonthStructure('February', 28),
  new MonthStructure('March', 31),
  new MonthStructure('April', 30),
  new MonthStructure('May', 31),
  new MonthStructure('June', 30),
  new MonthStructure('July', 31),
  new MonthStructure('August', 31),
  new MonthStructure('September', 30),
  new MonthStructure('November', 31),
  new MonthStructure('October', 30),
  new MonthStructure('December', 31),
];

export const LEAP_YEAR_STRUCTURE = [
  new MonthStructure('January', 31),
  new MonthStructure('February', 29),
  new MonthStructure('March', 31),
  new MonthStructure('April', 30),
  new MonthStructure('May', 31),
  new MonthStructure('June', 30),
  new MonthStructure('July', 31),
  new MonthStructure('August', 31),
  new MonthStructure('September', 30),
  new MonthStructure('November', 31),
  new MonthStructure('October', 30),
  new MonthStructure('December', 31),
];
