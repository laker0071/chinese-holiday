import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2018: IHoliday[] = [
  // 元旦
  { date: "2018-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2018-02-15", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2018-02-16", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2018-02-17", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2018-02-18", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2018-02-19", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2018-02-20", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2018-02-21", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 清明
  { date: "2018-04-05", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2018-04-06", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2018-04-07", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  // 劳动节
  { date: "2018-04-29", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2018-04-30", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2018-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 端午节
  { date: "2018-06-16", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2018-06-17", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2018-06-18", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  // 中秋节
  { date: "2018-09-22", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2018-09-23", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2018-09-24", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  // 国庆节
  { date: "2018-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2018-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2018-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2018-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2018-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2018-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2018-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  // 元旦
  { date: "2018-12-30", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2018-12-31", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2018: IAddtionalWorkday[] = [
  { date: "2018-02-11" },
  { date: "2018-04-08" },
  { date: "2018-04-28" },
  { date: "2018-09-29" },
  { date: "2018-09-30" },
  { date: "2018-12-29" },
];
