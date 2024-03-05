# @chnlib/chinese-holiday

[![NPM version](https://img.shields.io/npm/v/@chnlib/chinese-holiday.svg?style=flat)](https://npmjs.org/package/@chnlib/chinese-holiday)
[![NPM downloads](http://img.shields.io/npm/dm/@chnlib/chinese-holiday.svg?style=flat)](https://npmjs.org/package/@chnlib/chinese-holiday)

## Install

```bash
$ npm i @chnlib/chinese-holiday
```

## Desc
 ### 支持 ESM 和 CommonJS 语法
    支持 Vue、React、Angular等多种框架
    支持 Nodejs，Nest、Koa 框架

## Usage

```js
import ChineseHoliday from "@chnlib/chinese-holiday";


ChineseHoliday.isWorkday("2024-02-03"); // false，周六
ChineseHoliday.isWorkday("2024-02-04"); // true，调休
ChineseHoliday.isWorkday("2024-02-09"); // true,工作日
ChineseHoliday.isWorkday("2024-02-10"); // false,春节

ChineseHoliday.isHoliday("2024-02-03"); // false，非节假日
ChineseHoliday.isHoliday("2024-02-04"); // false，调休
ChineseHoliday.isHoliday("2024-02-09"); // false,工作日
ChineseHoliday.isHoliday("2024-02-10"); // true,春节

ChineseHoliday.findHolidays("2020-01-01", "2021-01-01"); // 返回开始时间和结束时间范围内的所有节假日
ChineseHoliday.findHolidays("2021-01-01", "2020-01-01"); // error,开始时间必须比结束时间早
```

Node
``` js
let ChineseHoliday = require('@chnlib/chinese-holiday')

console.log(ChineseHoliday.default.isHoliday('2023-01-01'))

```

## LICENSE

MIT
