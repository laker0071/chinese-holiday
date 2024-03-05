import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2016: IHoliday[] = [
  // 元旦
  { date: "2016-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2016-01-02", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2016-01-03", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2016-02-07", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2016-02-08", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2016-02-09", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2016-02-10", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2016-02-11", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2016-02-12", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2016-02-13", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 清明
  { date: "2016-04-02", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2016-04-03", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2016-04-04", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  // 劳动节
  { date: "2016-04-30", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2016-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2016-05-02", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 端午节
  { date: "2016-06-09", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2016-06-10", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2016-06-11", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  // 中秋节
  { date: "2016-09-15", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2016-09-16", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2016-09-17", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  // 国庆节
  { date: "2016-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2016-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2016-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2016-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2016-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2016-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2016-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  // 元旦
  { date: "2016-12-31", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2016: IAddtionalWorkday[] = [
  { date: "2016-02-06" },
  { date: "2016-02-14" },
  { date: "2016-06-12" },
  { date: "2016-09-18" },
  { date: "2016-10-08" },
  { date: "2016-10-09" },
];
