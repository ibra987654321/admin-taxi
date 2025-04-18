import { atom, atomWithDefault } from '~shared/lib/atom-state';
import { ISummaryTariffs, ITariff, getTariffs } from '~entities/tariffs/TariffsListView/api';

export const tariffsList = atomWithDefault<ITariff[] | null>((_get) => null);
export const tariffsPagination = atomWithDefault<ISummaryTariffs | null>((_get) => null);

export const setTariffsList = atom<ITariff[] | null, any, Promise<void>>(
  (get) => get(tariffsList),
  async (_get, set) => {
    const response = await getTariffs();
    set(tariffsList, response.data.tariffs.base['1']);
    set(tariffsPagination, response.data.summary);
  }
);
