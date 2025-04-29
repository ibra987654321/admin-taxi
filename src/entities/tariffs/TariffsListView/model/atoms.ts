import { atom, atomWithDefault } from '~shared/lib/atom-state';
import { ISummaryTariffs, ITariff, getTariffs } from '~entities/tariffs/TariffsListView/api';

export const tariffsList = atomWithDefault<ITariff[] | null>((_get) => null);
export const tariffsPagination = atomWithDefault<ISummaryTariffs | null>((_get) => null);

export const setTariffsList = atom<ITariff[] | null, any, Promise<void>>(
  (get) => get(tariffsList),
  async (_get, set, cityId) => {
    const response = await getTariffs(cityId);
    set(tariffsList, response.data.tariffs);
    set(tariffsPagination, response.data.summary);
  }
);
