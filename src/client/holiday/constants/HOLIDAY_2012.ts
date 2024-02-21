import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2012: IHoliday[] = [
  // 元旦
  { date: "2012-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2012-01-02", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2012-01-03", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2012-01-22", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2012-01-23", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2012-01-24", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2012-01-25", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2012-01-26", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2012-01-27", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2012-01-28", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 清明
  { date: "2012-04-02", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2012-04-03", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2012-04-04", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  // 劳动节
  { date: "2012-04-29", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2012-04-30", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2012-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 端午节
  { date: "2012-06-22", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2012-06-23", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2012-06-24", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  // 中秋节
  { date: "2012-09-30", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  // 国庆节
  { date: "2012-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2012-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2012-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2012-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2012-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2012-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2012-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2012: IAddtionalWorkday[] = [
  { date: "2012-01-21" },
  { date: "2012-01-29" },
  { date: "2012-03-31" },
  { date: "2012-04-01" },
  { date: "2012-04-28" },
  { date: "2012-09-29" },
];
