import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2010: IHoliday[] = [
  // 元旦
  { date: "2010-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2010-01-02", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2010-01-03", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2010-02-13", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2010-02-14", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2010-02-15", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2010-02-16", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2010-02-17", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2010-02-18", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2010-02-19", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 清明
  { date: "2010-04-03", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2010-04-04", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2010-04-05", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  // 劳动节
  { date: "2010-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2010-05-02", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2010-05-03", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 端午节
  { date: "2010-06-14", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2010-06-15", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2010-06-16", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  // 中秋节
  { date: "2010-09-22", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2010-09-23", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2010-09-24", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  // 国庆节
  { date: "2010-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2010-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2010-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2010-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2010-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2010-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2010-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2010-10-08", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2010: IAddtionalWorkday[] = [
  { date: "2010-02-20" },
  { date: "2010-02-21" },
  { date: "2010-06-12" },
  { date: "2010-06-13" },
  { date: "2010-09-19" },
  { date: "2010-09-25" },
  { date: "2010-09-26" },
  { date: "2010-10-09" },
];
