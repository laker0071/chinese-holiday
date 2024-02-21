import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2004: IHoliday[] = [
  // 元旦
  { date: "2004-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2004-01-22", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2004-01-23", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2004-01-24", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2004-01-25", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2004-01-26", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2004-01-27", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2004-01-28", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 劳动节
  { date: "2004-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2004-05-02", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2004-05-03", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2004-05-04", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2004-05-05", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2004-05-06", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2004-05-07", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 国庆节
  { date: "2004-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2004-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2004-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2004-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2004-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2004-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2004-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2004: IAddtionalWorkday[] = [
  { date: "2004-01-17" },
  { date: "2004-01-18" },
  { date: "2004-05-08" },
  { date: "2004-05-09" },
  { date: "2004-10-09" },
  { date: "2004-10-10" },
];
