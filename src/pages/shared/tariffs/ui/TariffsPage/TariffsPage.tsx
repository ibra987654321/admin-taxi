import { FC } from 'react';

import { Tariffs } from '~widgets/tariffs';

export interface TariffsPageProps {}

export const TariffsPage: FC<TariffsPageProps> = () => {
  return (
    <>
      <Tariffs />
    </>
  );
};
