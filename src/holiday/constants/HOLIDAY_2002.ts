import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2002: IHoliday[] = [
  // 元旦
  { date: "2002-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2002-01-02", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2002-01-03", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2002-02-12", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2002-02-13", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2002-02-14", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2002-02-15", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2002-02-16", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2002-02-17", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2002-02-18", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 劳动节
  { date: "2002-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2002-05-02", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2002-05-03", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2002-05-04", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2002-05-05", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2002-05-06", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2002-05-07", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 国庆节
  { date: "2002-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2002-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2002-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2002-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2002-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2002-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2002-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2002: IAddtionalWorkday[] = [
  { date: "2002-02-09" },
  { date: "2002-02-10" },
  { date: "2002-04-27" },
  { date: "2002-04-28" },
  { date: "2002-09-28" },
  { date: "2002-09-29" },
];
