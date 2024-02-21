import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import { ADDTIONALWORKDAY_2020, HOLIDAY_2020 } from "./HOLIDAY_2020";
import { ADDTIONALWORKDAY_2021, HOLIDAY_2021 } from "./HOLIDAY_2021";
import { ADDTIONALWORKDAY_2022, HOLIDAY_2022 } from "./HOLIDAY_2022";
import { ADDTIONALWORKDAY_2023, HOLIDAY_2023 } from "./HOLIDAY_2023";
import { ADDTIONALWORKDAY_2024, HOLIDAY_2024 } from "./HOLIDAY_2024";
import { IHoliday, IWorkday } from "./type";

dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);

const ALL_HOLIDAYS = [
  ...HOLIDAY_2024,
  ...HOLIDAY_2023,
  ...HOLIDAY_2022,
  ...HOLIDAY_2021,
  ...HOLIDAY_2020,
];

const ALL_ADDTIONALWORKDAYS = [
  ...ADDTIONALWORKDAY_2024,
  ...ADDTIONALWORKDAY_2023,
  ...ADDTIONALWORKDAY_2022,
  ...ADDTIONALWORKDAY_2021,
  ...ADDTIONALWORKDAY_2020,
];

/**
 * 判断是否为节假日
 * @param value 日期
 * @returns
 */
function isHoliday(value: string | number | Dayjs) {
  let matchedHoliday: IHoliday[] = [];
  const fmtDate = dayjs(value).format("YYYY-MM-DD");

  for (let i = 0; i < ALL_HOLIDAYS.length; i++) {
    if (ALL_HOLIDAYS[i].date === fmtDate) {
      matchedHoliday.push(ALL_HOLIDAYS[i]);
      break;
    }
  }

  // console.log(matchedHoliday);
  return matchedHoliday.length === 1 ? true : false;
}

/**
 * 判断是否为工作日
 * @param value 日期
 * @returns 
 */
function isWorkday(value: string | number | Dayjs) {
  let matchedWorkday: IWorkday[] = [];
  const fmtDate = dayjs(value).format("YYYY-MM-DD"); //
  const fmtDateDay = dayjs(value).day(); // 获取传入的日期是周几

  // 如果日期是周六周日，判断是否在调休日中，如果是周一至周五，判断是否节假日
  if (fmtDateDay === 6 || fmtDateDay === 7) {
    for (let i = 0; i < ALL_ADDTIONALWORKDAYS.length; i++) {
      if (ALL_ADDTIONALWORKDAYS[i].date === fmtDate) {
        matchedWorkday.push(ALL_ADDTIONALWORKDAYS[i]);
        break;
      }
    }
    return matchedWorkday.length === 1 ? true : false;
  } else {
    return !isHoliday(fmtDate);
  }
}

/**
 * 查找日期范围内的节假日，包含开始日期和结束日期
 * @param start 开始日期
 * @param end 结束日期，如果没有传结束日期，返回开始日期后的所有节假日
 */
function findHolidays(
  start: string | number | Dayjs,
  end?: string | number | Dayjs
) {
  let matchedHolidays: IHoliday[] = [];
  const fmtStartDate = dayjs(start).format("YYYY-MM-DD");
  const fmtEndDate = dayjs(end).format("YYYY-MM-DD");

  if(dayjs(fmtStartDate).isAfter(dayjs(fmtEndDate))) return console.error('startTime must before endTime') // 开始时间必须比结束时间早

  if (end) {
    for (let i = 0; i < ALL_HOLIDAYS.length; i++) {
      if (
        dayjs(ALL_HOLIDAYS[i].date).isBetween(
          fmtStartDate,
          fmtEndDate,
          "day",
          "[]"
        )
      ) {
        matchedHolidays.push(ALL_HOLIDAYS[i]);
      }
    }
  } else {
    for (let i = 0; i < ALL_HOLIDAYS.length; i++) {
      if (dayjs(ALL_HOLIDAYS[i].date).isSameOrAfter(fmtStartDate, "day")) {
        matchedHolidays.push(ALL_HOLIDAYS[i]);
      }
    }
  }

  return matchedHolidays;
}

export default {
  isHoliday,
  isWorkday,
  findHolidays,
};
