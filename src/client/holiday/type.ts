
export const HOLIDAYS_TYPE = {
  NEW_YEARS_DAY: { en: "New Year's Day", cn: "元旦" },
  SPRING_FESTIVAL: { en: "Spring Festival", cn: "春节" },
  TOMB_SWEEPING_DAY: { en: "Tomb-sweeping Day", cn: "清明" },
  LABOUR_DAY: { en: "Labour Day", cn: "劳动节" },
  DRAGON_BOAT_FESTIVAL: { en: "Dragon Boat Festival", cn: "端午节" },
  MID_AUTUMN_FESTIVAL: { en: "Mid-autumn Festival", cn: "中秋" },
  NATIONAL_DAY: { en: "National Day", cn: "国庆节" },
};

export interface IHoliday  {
  date: string;
  [key: string]: any;
};

export interface IAddtionalWorkday  {
  date: string;
};

export interface IWorkday {
  date: string;
}
