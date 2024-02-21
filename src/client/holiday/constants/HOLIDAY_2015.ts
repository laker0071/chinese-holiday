import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2015: IHoliday[] = [
  // 元旦
  { date: "2015-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2015-01-02", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2015-01-03", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2015-02-18", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2015-02-19", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2015-02-20", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2015-02-21", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2015-02-22", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2015-02-23", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2015-02-24", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 清明
  { date: "2015-04-04", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2015-04-05", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2015-04-06", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  // 劳动节
  { date: "2015-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2015-05-02", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2015-05-03", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 端午节
  { date: "2015-06-20", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2015-06-21", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2015-06-22", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  // 抗日战争胜利纪念日
  { date: "2015-09-03", ...HOLIDAYS_TYPE.VICTORY_MEMORIAL_DAY },
  { date: "2015-09-04", ...HOLIDAYS_TYPE.VICTORY_MEMORIAL_DAY },
  { date: "2015-09-05", ...HOLIDAYS_TYPE.VICTORY_MEMORIAL_DAY },
  // 中秋节
  { date: "2015-09-26", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2015-09-27", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  // 国庆节
  { date: "2015-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2015-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2015-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2015-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2015-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2015-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2015-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2015: IAddtionalWorkday[] = [
  { date: "2015-01-04" },
  { date: "2015-02-15" },
  { date: "2015-02-28" },
  { date: "2015-09-06" },
  { date: "2015-10-10" },
];
