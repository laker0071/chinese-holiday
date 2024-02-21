import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "./type";

export const HOLIDAY_2020: IHoliday[] = [
  // 元旦
  { date: "2020-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2020-01-24", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2020-01-25", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2020-01-26", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2020-01-27", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2020-01-28", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2020-01-29", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2020-01-30", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2020-01-31", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2020-02-01", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2020-02-02", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 清明
  { date: "2020-04-04", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2020-04-05", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2020-04-06", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  // 劳动节
  { date: "2020-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2020-05-02", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2020-05-03", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2020-05-04", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2020-05-05", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 端午节
  { date: "2020-06-25", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2020-06-26", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2020-06-27", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  // 中秋节 TODO: 同一天的如何处理
  { date: "2020-10-01", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  // 国庆节
  { date: "2020-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2020-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2020-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2020-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2020-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2020-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2020-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2020-10-08", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2020: IAddtionalWorkday[] = [
  { date: "2020-01-19" },
  { date: "2020-04-26" },
  { date: "2020-05-09" },
  { date: "2020-06-28" },
  { date: "2020-09-27" },
  { date: "2020-10-10" },
];
