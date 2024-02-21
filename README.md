# @chnlib/chinese-holiday

[![NPM version](https://img.shields.io/npm/v/@chnlib/chinese-holiday.svg?style=flat)](https://npmjs.org/package/@chnlib/chinese-holiday)
[![NPM downloads](http://img.shields.io/npm/dm/@chnlib/chinese-holiday.svg?style=flat)](https://npmjs.org/package/@chnlib/chinese-holiday)

## Install

```bash
$ npm i @chnlib/chinese-holiday
```

## Usage

```js
import ChineseHoliday from "@chnlib/chinese-holiday";

ChineseHoliday.isWorkday("2024-02-03"); // false，周六
ChineseHoliday.isWorkday("2024-02-04"); // true，调休
ChineseHoliday.isWorkday("2024-02-09"); // true,工作日
ChineseHoliday.isWorkday("2024-02-10"); // false,春节

ChineseHoliday.isHoliday("2024-02-03"); // false，非假期
ChineseHoliday.isHoliday("2024-02-04"); // false，非假期
ChineseHoliday.isHoliday("2024-02-09"); // false,工作日
ChineseHoliday.isHoliday("2024-02-10"); // true,春节

ChineseHoliday.findHolidays("2020-01-01", "2021-01-01"); // 返回开始时间和结束时间范围内的所有节假日
```

## LICENSE

MIT
