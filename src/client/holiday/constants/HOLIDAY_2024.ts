import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2024: IHoliday[] = [
  // 元旦
  { date: "2024-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2024-02-10", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2024-02-11", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2024-02-12", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2024-02-13", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2024-02-14", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2024-02-15", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2024-02-16", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2024-02-17", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 清明
  { date: "2024-04-04", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2024-04-05", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2024-04-06", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  // 劳动节
  { date: "2024-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2024-05-02", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2024-05-03", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2024-05-04", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2024-05-05", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 端午节
  { date: "2024-06-08", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2024-06-09", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2024-06-10", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  // 中秋节
  { date: "2024-09-15", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2024-09-16", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2024-09-17", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  // 国庆节
  { date: "2024-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2024-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2024-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2024-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2024-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2024-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2024-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2024: IAddtionalWorkday[] = [
  { date: "2024-02-04" },
  { date: "2024-02-18" },
  { date: "2024-04-07" },
  { date: "2024-04-28" },
  { date: "2024-05-11" },
  { date: "2024-09-14" },
  { date: "2024-09-29" },
  { date: "2024-10-12" },
];
