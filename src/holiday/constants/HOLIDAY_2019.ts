import { HOLIDAYS_TYPE, IAddtionalWorkday, IHoliday } from "../type";

export const HOLIDAY_2019: IHoliday[] = [
  // 元旦
  { date: "2019-01-01", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  // 春节
  { date: "2019-02-04", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2019-02-05", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2019-02-06", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2019-02-07", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2019-02-08", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2019-02-09", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  { date: "2019-02-10", ...HOLIDAYS_TYPE.SPRING_FESTIVAL },
  // 清明
  { date: "2019-04-05", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2019-04-06", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  { date: "2019-04-07", ...HOLIDAYS_TYPE.TOMB_SWEEPING_DAY },
  // 劳动节
  { date: "2019-05-01", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2019-05-02", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2019-05-03", ...HOLIDAYS_TYPE.LABOUR_DAY },
  { date: "2019-05-04", ...HOLIDAYS_TYPE.LABOUR_DAY },
  // 端午节
  { date: "2019-06-07", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2019-06-08", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  { date: "2019-06-09", ...HOLIDAYS_TYPE.DRAGON_BOAT_FESTIVAL },
  // 中秋节
  { date: "2019-09-13", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2019-09-14", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  { date: "2019-09-15", ...HOLIDAYS_TYPE.MID_AUTUMN_FESTIVAL },
  // 国庆节
  { date: "2019-10-01", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2019-10-02", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2019-10-03", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2019-10-04", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2019-10-05", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2019-10-06", ...HOLIDAYS_TYPE.NATIONAL_DAY },
  { date: "2019-10-07", ...HOLIDAYS_TYPE.NATIONAL_DAY },
];

export const ADDTIONALWORKDAY_2019: IAddtionalWorkday[] = [
  { date: "2019-02-02" },
  { date: "2019-02-03" },
  { date: "2019-04-28" },
  { date: "2019-05-05" },
  { date: "2019-10-12" },
];
