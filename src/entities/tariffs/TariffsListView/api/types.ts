type HolidayAdjustment = {
  day: number;
  month: number;
  percent: number;
};

export interface ITariff {
  id: number;
  baseFare: number;
  carClassId: number;
  car_class: {
    id: number;
    name: string;
  };
  cityId: number;
  costPerKm: number;
  costPerMinute: number;
  description: string;
  effectivePrice: number | string; // возможно, лучше уточнить, почему NaN в строке
  holidayAdjustments: HolidayAdjustment[];
  hourlyAdjustments: Record<number, number>; // ключи — часы (0-23), значения — проценты
  monthlyAdjustments: Record<number, number>; // ключи — месяцы (1-12), значения — проценты
  serviceFeePercent: number;
  isActive: boolean;
  createdAt: string; // можно заменить на Date, если будет преобразование
  updatedAt: string;
}

export interface ISummaryTariffs {
  cityId: string;
  monthsCount: number;
  totalTariffs: number;
}
export interface ApiResponseTariffsData {
  summary: ISummaryTariffs;
  tariffs: {
    base: {
      1: ITariff[];
    };
  };
}
