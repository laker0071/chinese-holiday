import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2011: IHoliday[] = [
  // 元旦
  { date: "2011-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2011-01-02", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2011-01-03", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2011-02-02", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2011-02-03", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2011-02-04", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2011-02-05", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2011-02-06", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2011-02-07", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2011-02-08", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 清明
  { date: "2011-04-03", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2011-04-04", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2011-04-05", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  // 劳动节
  { date: "2011-04-30", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2011-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2011-05-02", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 端午节
  { date: "2011-06-04", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2011-06-05", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2011-06-06", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  // 中秋节
  { date: "2011-09-10", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2011-09-11", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2011-09-12", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  // 国庆节
  { date: "2011-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2011-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2011-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2011-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2011-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2011-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2011-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2011: IAddtionalWorkday[] = [
  { date: "2011-02-12" },
  { date: "2011-04-02" },
  { date: "2011-10-08" },
  { date: "2011-10-09" },
  { date: "2011-12-31" },

];
