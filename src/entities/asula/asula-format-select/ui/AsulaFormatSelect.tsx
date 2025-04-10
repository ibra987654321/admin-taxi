import React from 'react';

import { SelectProps } from 'antd';

import { Select } from '~shared/ui';

interface AsulaFormatSelectType extends SelectProps {
  handleChange?: any;
  options: any;
  defaultValue?: any;
  placeholder: string;
  suffix?: any;
  lang?: string;
}
interface DefaultOptionType {
  value: string | number;
  label: React.ReactNode;
  disabled?: boolean;
}

export const AsulaFormatSelect = ({
  handleChange,
  options,
  defaultValue,
  placeholder,
  value,
  suffix,
  lang,
  ...props
}: AsulaFormatSelectType) => {
  return (
    <div>
      <Select
        mode="tags"
        value={value}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={handleChange}
        style={{ width: '100%' }}
        suffix={suffix}
        options={
          options?.map((item: AsulaFormatSelectType) => ({
            value: item[`format_${lang}` as keyof AsulaFormatSelectType],
            label: item[`format_${lang}` as keyof AsulaFormatSelectType],
          })) as DefaultOptionType[]
        }
        {...props}
      ></Select>
    </div>
  );
};
