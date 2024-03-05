import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2009: IHoliday[] = [
  // 元旦
  { date: "2009-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2009-01-02", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2009-01-03", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2009-01-24", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2009-01-25", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2009-01-26", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2009-01-27", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2009-01-28", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2009-01-29", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2009-01-30", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2009-01-31", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 清明
  { date: "2009-04-04", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2009-04-05", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2009-04-06", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  // 劳动节
  { date: "2009-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2009-05-02", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2009-05-03", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 端午节
  { date: "2009-05-28", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2009-05-29", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2009-05-30", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  // 中秋节
  { date: "2009-09-13", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2009-09-14", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2009-09-15", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  // 国庆节
  { date: "2009-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2009-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2009-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2009-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2009-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2009-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2009-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2009-10-08", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2009: IAddtionalWorkday[] = [
  { date: "2009-01-24" },
  { date: "2009-02-01" },
  { date: "2009-05-31" },
  { date: "2009-09-27" },
  { date: "2009-10-10" },
];
