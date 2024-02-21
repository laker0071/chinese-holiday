import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "./type";

export const HOLIDAY_2021: IHoliday[] = [
  // 元旦
  { date: "2021-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2021-01-02", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2021-01-03", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2021-02-11", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2021-02-12", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2021-02-13", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2021-02-14", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2021-02-15", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2021-02-16", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2021-02-17", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 清明
  { date: "2021-04-03", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2021-04-04", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2021-04-05", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  // 劳动节
  { date: "2021-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2021-05-02", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2021-05-03", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2021-05-04", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2021-05-05", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 端午节
  { date: "2021-06-12", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2021-06-13", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2021-06-14", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  // 中秋节
  { date: "2021-09-19", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2021-09-20", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2021-09-21", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  // 国庆节
  { date: "2021-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2021-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2021-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2021-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2021-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2021-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2021-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2021: IAddtionalWorkday[] = [
  { date: "2021-02-07" },
  { date: "2021-02-20" },
  { date: "2021-04-25" },
  { date: "2021-05-08" },
  { date: "2021-09-18" },
  { date: "2021-09-26" },
  { date: "2021-10-09" },
];
