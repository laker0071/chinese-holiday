import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2014: IHoliday[] = [
  // 元旦
  { date: "2014-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2014-01-31", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2014-02-01", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2014-02-02", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2014-02-03", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2014-02-04", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2014-02-05", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2014-02-06", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 清明
  { date: "2014-04-05", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2014-04-06", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2014-04-07", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  // 劳动节
  { date: "2014-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2014-05-02", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2014-05-03", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 端午节
  { date: "2014-05-31", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2014-06-01", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2014-06-02", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  // 中秋节
  { date: "2014-09-06", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2014-09-07", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2014-09-08", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  // 国庆节
  { date: "2014-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2014-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2014-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2014-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2014-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2014-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2014-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2014: IAddtionalWorkday[] = [
  { date: "2014-01-26" },
  { date: "2014-02-08" },
  { date: "2014-05-04" },
  { date: "2014-09-28" },
  { date: "2014-10-11" },
];
