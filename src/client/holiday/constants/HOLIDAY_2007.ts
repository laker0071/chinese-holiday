import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2007: IHoliday[] = [
  // 元旦
  { date: "2007-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2007-01-02", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2007-01-03", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2007-02-18", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2007-02-19", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2007-02-20", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2007-02-21", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2007-02-22", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2007-02-23", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2007-02-24", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 劳动节
  { date: "2007-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2007-05-02", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2007-05-03", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2007-05-04", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2007-05-05", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2007-05-06", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2007-05-07", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 国庆节
  { date: "2007-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2007-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2007-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2007-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2007-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2007-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2007-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  // 元旦
  { date: "2007-12-30", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2007-12-31", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
];

export const ADDTIONALWORKDAY_2007: IAddtionalWorkday[] = [
  { date: "2007-02-17" },
  { date: "2007-02-25" },
  { date: "2007-04-28" },
  { date: "2007-04-29" },
  { date: "2007-09-29" },
  { date: "2007-09-30" },
  { date: "2007-12-29" },
];
