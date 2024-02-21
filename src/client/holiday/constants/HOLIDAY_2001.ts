import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2001: IHoliday[] = [
  // 元旦
  { date: "2001-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2001-01-24", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2001-01-25", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2001-01-26", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2001-01-27", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2001-01-28", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2001-01-29", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2001-01-30", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 劳动节
  { date: "2001-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2001-05-02", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2001-05-03", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2001-05-04", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2001-05-05", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2001-05-06", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2001-05-07", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 国庆节
  { date: "2001-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2001-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2001-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2001-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2001-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2001-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2001-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2001: IAddtionalWorkday[] = [
  { date: "2001-01-20" },
  { date: "2001-01-21" },
  { date: "2001-09-29" },
  { date: "2001-09-30" },
  { date: "2001-12-29" },
  { date: "2001-12-30" },
];
