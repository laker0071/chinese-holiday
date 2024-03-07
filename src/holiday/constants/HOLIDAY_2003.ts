import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2003: IHoliday[] = [
  // 元旦
  { date: "2003-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2003-02-01", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2003-02-02", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2003-02-03", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2003-02-04", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2003-02-05", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2003-02-06", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2003-02-07", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 劳动节
  { date: "2003-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2003-05-02", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2003-05-03", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2003-05-04", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2003-05-05", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2003-05-06", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2003-05-07", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 国庆节
  { date: "2003-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2003-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2003-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2003-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2003-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2003-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2003-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2003: IAddtionalWorkday[] = [
  { date: "2003-02-08" },
  { date: "2003-02-09" },
  { date: "2003-04-26" },
  { date: "2003-04-27" },
  { date: "2003-09-27" },
  { date: "2003-09-28" },
];
