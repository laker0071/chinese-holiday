import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2013: IHoliday[] = [
  // 元旦
  { date: "2013-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2013-01-02", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2013-01-03", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2013-02-09", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2013-02-10", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2013-02-11", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2013-02-12", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2013-02-13", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2013-02-14", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2013-02-15", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 清明
  { date: "2013-04-04", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2013-04-05", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2013-04-06", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  // 劳动节
  { date: "2013-04-29", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2013-04-30", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2013-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 端午节
  { date: "2013-06-10", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2013-06-11", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2013-06-12", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  // 中秋节
  { date: "2013-09-19", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2013-09-20", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2013-09-21", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  // 国庆节
  { date: "2013-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2013-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2013-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2013-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2013-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2013-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2013-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2013: IAddtionalWorkday[] = [
  { date: "2013-01-05" },
  { date: "2013-01-06" },
  { date: "2013-02-16" },
  { date: "2013-02-17" },
  { date: "2013-04-27" },
  { date: "2013-04-28" },
  { date: "2013-06-08" },
  { date: "2013-06-09" },
  { date: "2013-09-22" },
  { date: "2013-09-29" },
];
