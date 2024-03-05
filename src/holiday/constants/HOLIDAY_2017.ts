import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2017: IHoliday[] = [
  // 元旦
  { date: "2017-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2017-01-02", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2017-01-27", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2017-01-28", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2017-01-29", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2017-01-30", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2017-01-31", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2017-02-01", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2017-02-02", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 清明
  { date: "2017-04-02", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2017-04-03", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2017-04-04", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  // 劳动节
  { date: "2017-04-29", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2017-04-30", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2017-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 端午节
  { date: "2017-05-28", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2017-05-29", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2017-05-30", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  // 中秋节
  { date: "2017-09-15", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2017-09-16", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2017-09-17", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  // 国庆节
  { date: "2017-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2017-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2017-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2017-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2017-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2017-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2017-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2017-10-08", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  // 元旦
  { date: "2017-12-30", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2017-12-31", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2017: IAddtionalWorkday[] = [
  { date: "2017-01-22" },
  { date: "2017-02-04" },
  { date: "2017-04-01" },
  { date: "2017-05-27" },
  { date: "2017-09-30" },
];
