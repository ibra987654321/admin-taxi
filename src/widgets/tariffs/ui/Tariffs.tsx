import { FC, useEffect } from 'react';

import { TariffsListView } from '~entities/tariffs/TariffsListView';
import { useSetTariffsList, useTariffsList } from '~entities/tariffs/TariffsListView/model';
import { AddTariff } from '~features/tariffs';

export interface TariffsProps {}

export const Tariffs: FC<TariffsProps> = () => {
  const tariffsList = useTariffsList();
  const setTariffsList = useSetTariffsList();

  useEffect(() => {
    setTariffsList();
  }, []);

  return (
    <div>
      <div className="w-full flex justify-end">
        <AddTariff />
      </div>
      <TariffsListView tariffsList={tariffsList} />
    </div>
  );
};
