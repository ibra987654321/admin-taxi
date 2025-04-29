import React, { FC } from 'react';

import { SelectProps } from 'antd';

import { Select } from '~shared/ui';

interface TariffCitySelectorViewProps extends SelectProps {
  citiesList: any;
}

export const TariffCitySelectorView: FC<TariffCitySelectorViewProps> = ({
  citiesList,
  ...props
}) => {
  return (
    <div>
      <Select
        options={citiesList?.map((item: { id: any; name: any }) => {
          return {
            value: item.id,
            label: item.name,
          };
        })}
        {...props}
      />
    </div>
  );
};
