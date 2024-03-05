import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2005: IHoliday[] = [
  // 元旦
  { date: "2005-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2005-01-02", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2005-01-03", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2005-02-09", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2005-02-10", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2005-02-11", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2005-02-12", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2005-02-13", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2005-02-14", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2005-02-15", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 劳动节
  { date: "2005-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2005-05-02", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2005-05-03", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2005-05-04", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2005-05-05", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2005-05-06", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2005-05-07", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 国庆节
  { date: "2005-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2005-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2005-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2005-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2005-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2005-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2005-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2005: IAddtionalWorkday[] = [
  { date: "2005-02-05" },
  { date: "2005-02-06" },
  { date: "2005-04-30" },
  { date: "2005-05-08" },
  { date: "2005-10-08" },
  { date: "2005-10-09" },
  { date: "2005-12-31" },
];
