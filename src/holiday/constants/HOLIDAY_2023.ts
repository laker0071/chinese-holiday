import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2023: IHoliday[] = [
  // 元旦
  { date: "2023-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2023-01-02", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2023-01-21", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2023-01-22", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2023-01-23", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2023-01-24", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2023-01-25", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2023-01-26", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2023-01-27", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 清明
  { date: "2023-04-05", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  // 劳动节
  { date: "2023-04-29", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2023-04-30", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2023-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2023-05-02", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2023-05-03", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 端午节
  { date: "2023-06-22", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2023-06-23", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2023-06-24", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  // 中秋节
  { date: "2023-09-29", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2023-09-30", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  // 国庆节
  { date: "2023-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2023-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2023-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2023-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2023-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2023-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  // 元旦
  { date: "2023-12-30", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2023-12-31", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
];

export const ADDTIONALWORKDAY_2023: IAddtionalWorkday[] = [
  { date: "2023-01-28" },
  { date: "2023-01-29" },
  { date: "2023-04-23" },
  { date: "2023-05-06" },
  { date: "2023-06-25" },
  { date: "2023-10-07" },
  { date: "2023-10-08" },
];
