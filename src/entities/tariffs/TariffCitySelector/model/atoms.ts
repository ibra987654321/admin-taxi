import { atom, atomWithDefault } from '~shared/lib/atom-state';
import { getTariffCities } from '~entities/tariffs/TariffCitySelector/api';

export const tariffCitiesList = atomWithDefault<any[] | null>((_get) => null);

export const setTariffCitiesList = atom<any[] | null, any, Promise<void>>(
  (get) => get(tariffCitiesList),
  async (_get, set) => {
    const response = await getTariffCities();
    set(tariffCitiesList, response.data.cities);
  }
);
