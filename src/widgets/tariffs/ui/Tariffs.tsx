import { FC, useEffect, useState } from 'react';

import { TariffsListView } from '~entities/tariffs/TariffsListView';
import { useSetTariffsList, useTariffsList } from '~entities/tariffs/TariffsListView/model';
import { AddTariff } from '~features/tariffs';
import {
  TariffCitySelectorView,
  useSetTariffCitiesList,
  useTariffCitiesList,
} from '~entities/tariffs/TariffCitySelector';

export interface TariffsProps {}

export const Tariffs: FC<TariffsProps> = () => {
  const [cityId, setCityId] = useState(1);
  const tariffsList = useTariffsList();
  const tariffCitiesList = useTariffCitiesList();
  const setTariffsList = useSetTariffsList();
  const setTariffCitiesList = useSetTariffCitiesList();

  useEffect(() => {
    setTariffsList(1);
    setTariffCitiesList();
  }, []);

  const onChanghe = (val: any) => {
    setTariffsList(val);
    setCityId(val);
  };

  return (
    <div>
      <div className="w-full flex justify-end">
        <AddTariff />
      </div>
      <TariffCitySelectorView value={cityId} citiesList={tariffCitiesList} onChange={onChanghe} />
      <TariffsListView tariffsList={tariffsList} />
    </div>
  );
};
