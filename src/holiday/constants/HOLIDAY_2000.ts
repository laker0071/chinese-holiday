import { HOLIDAYS_TYPE, IHoliday } from "../type";

export const HOLIDAY_2000: IHoliday[] = [
  // 元旦
  { date: "2000-12-30", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
  { date: "2000-12-31", ...HOLIDAYS_TYPE.NEW_YEARS_DAY },
];
