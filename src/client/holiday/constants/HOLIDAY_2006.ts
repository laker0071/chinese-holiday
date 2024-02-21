import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2006: IHoliday[] = [
  // 元旦
  { date: "2006-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2006-01-02", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2006-01-03", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2006-01-29", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2006-01-30", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2006-01-31", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2006-02-01", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2006-02-02", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2006-02-03", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2006-02-04", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 劳动节
  { date: "2006-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2006-05-02", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2006-05-03", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2006-05-04", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2006-05-05", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2006-05-06", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2006-05-07", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 国庆节
  { date: "2006-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2006-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2006-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2006-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2006-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2006-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2006-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2006: IAddtionalWorkday[] = [
  { date: "2006-01-28" },
  { date: "2006-02-05" },
  { date: "2006-04-29" },
  { date: "2006-04-30" },
  { date: "2006-09-30" },
  { date: "2006-10-08" },
  { date: "2006-12-30" },
  { date: "2006-12-31" },
];
