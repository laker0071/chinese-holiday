import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import { HOLIDAY_2000 } from "./constants/HOLIDAY_2000";
import { ADDTIONALWORKDAY_2001, HOLIDAY_2001 } from "./constants/HOLIDAY_2001";
import { ADDTIONALWORKDAY_2002, HOLIDAY_2002 } from "./constants/HOLIDAY_2002";
import { ADDTIONALWORKDAY_2003, HOLIDAY_2003 } from "./constants/HOLIDAY_2003";
import { ADDTIONALWORKDAY_2004, HOLIDAY_2004 } from "./constants/HOLIDAY_2004";
import { ADDTIONALWORKDAY_2005, HOLIDAY_2005 } from "./constants/HOLIDAY_2005";
import { ADDTIONALWORKDAY_2006, HOLIDAY_2006 } from "./constants/HOLIDAY_2006";
import { ADDTIONALWORKDAY_2007, HOLIDAY_2007 } from "./constants/HOLIDAY_2007";
import { ADDTIONALWORKDAY_2008, HOLIDAY_2008 } from "./constants/HOLIDAY_2008";
import { ADDTIONALWORKDAY_2009, HOLIDAY_2009 } from "./constants/HOLIDAY_2009";
import { ADDTIONALWORKDAY_2010, HOLIDAY_2010 } from "./constants/HOLIDAY_2010";
import { ADDTIONALWORKDAY_2011, HOLIDAY_2011 } from "./constants/HOLIDAY_2011";
import { ADDTIONALWORKDAY_2012, HOLIDAY_2012 } from "./constants/HOLIDAY_2012";
import { ADDTIONALWORKDAY_2013, HOLIDAY_2013 } from "./constants/HOLIDAY_2013";
import { ADDTIONALWORKDAY_2014, HOLIDAY_2014 } from "./constants/HOLIDAY_2014";
import { ADDTIONALWORKDAY_2015, HOLIDAY_2015 } from "./constants/HOLIDAY_2015";
import { ADDTIONALWORKDAY_2016, HOLIDAY_2016 } from "./constants/HOLIDAY_2016";
import { ADDTIONALWORKDAY_2017, HOLIDAY_2017 } from "./constants/HOLIDAY_2017";
import { ADDTIONALWORKDAY_2018, HOLIDAY_2018 } from "./constants/HOLIDAY_2018";
import { ADDTIONALWORKDAY_2019, HOLIDAY_2019 } from "./constants/HOLIDAY_2019";
import { ADDTIONALWORKDAY_2020, HOLIDAY_2020 } from "./constants/HOLIDAY_2020";
import { ADDTIONALWORKDAY_2021, HOLIDAY_2021 } from "./constants/HOLIDAY_2021";
import { ADDTIONALWORKDAY_2022, HOLIDAY_2022 } from "./constants/HOLIDAY_2022";
import { ADDTIONALWORKDAY_2023, HOLIDAY_2023 } from "./constants/HOLIDAY_2023";
import { ADDTIONALWORKDAY_2024, HOLIDAY_2024 } from "./constants/HOLIDAY_2024";
import { IHoliday, IWorkday } from "./type";

dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);

const ALL_HOLIDAYS = [
  ...HOLIDAY_2024,
  ...HOLIDAY_2023,
  ...HOLIDAY_2022,
  ...HOLIDAY_2021,
  ...HOLIDAY_2020,
  ...HOLIDAY_2020,
  ...HOLIDAY_2019,
  ...HOLIDAY_2018,
  ...HOLIDAY_2017,
  ...HOLIDAY_2016,
  ...HOLIDAY_2015,
  ...HOLIDAY_2014,
  ...HOLIDAY_2013,
  ...HOLIDAY_2012,
  ...HOLIDAY_2011,
  ...HOLIDAY_2010,
  ...HOLIDAY_2009,
  ...HOLIDAY_2008,
  ...HOLIDAY_2007,
  ...HOLIDAY_2006,
  ...HOLIDAY_2005,
  ...HOLIDAY_2004,
  ...HOLIDAY_2003,
  ...HOLIDAY_2002,
  ...HOLIDAY_2001,
  ...HOLIDAY_2000
];

const ALL_ADDTIONALWORKDAYS = [
  ...ADDTIONALWORKDAY_2024,
  ...ADDTIONALWORKDAY_2023,
  ...ADDTIONALWORKDAY_2022,
  ...ADDTIONALWORKDAY_2021,
  ...ADDTIONALWORKDAY_2020,
  ...ADDTIONALWORKDAY_2019,
  ...ADDTIONALWORKDAY_2018,
  ...ADDTIONALWORKDAY_2017,
  ...ADDTIONALWORKDAY_2016,
  ...ADDTIONALWORKDAY_2015,
  ...ADDTIONALWORKDAY_2014,
  ...ADDTIONALWORKDAY_2013,
  ...ADDTIONALWORKDAY_2012,
  ...ADDTIONALWORKDAY_2011,
  ...ADDTIONALWORKDAY_2010,
  ...ADDTIONALWORKDAY_2009,
  ...ADDTIONALWORKDAY_2008,
  ...ADDTIONALWORKDAY_2007,
  ...ADDTIONALWORKDAY_2006,
  ...ADDTIONALWORKDAY_2005,
  ...ADDTIONALWORKDAY_2004,
  ...ADDTIONALWORKDAY_2003,
  ...ADDTIONALWORKDAY_2002,
  ...ADDTIONALWORKDAY_2001,
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
