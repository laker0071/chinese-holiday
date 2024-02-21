import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "./type";

export const HOLIDAY_2022: IHoliday[] = [
  // 元旦
  { date: "2022-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2022-01-02", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2022-01-03", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2022-01-31", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2022-02-01", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2022-02-02", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2022-02-03", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2022-02-04", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2022-02-05", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2022-02-06", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 清明
  { date: "2022-04-03", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2022-04-04", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2022-04-05", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  // 劳动节
  { date: "2022-04-30", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2022-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2022-05-02", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2022-05-03", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2022-05-04", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 端午节
  { date: "2022-06-03", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2022-06-04", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2022-06-05", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  // 中秋节
  { date: "2022-09-10", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2022-09-11", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2022-09-12", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  // 国庆节
  { date: "2022-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2022-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2022-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2022-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2022-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2022-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2022-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2022: IAddtionalWorkday[] = [
  { date: "2022-01-29" },
  { date: "2022-01-30" },
  { date: "2022-04-02" },
  { date: "2022-04-24" },
  { date: "2022-05-07" },
  { date: "2022-10-08" },
  { date: "2022-10-09" },
];
