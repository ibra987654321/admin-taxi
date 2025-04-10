import { FC } from 'react';
import { Select as AntSelect, SelectProps } from 'antd';

import { ArrowIcon, XIcon } from '~shared/ui/Icons/icons';
import { useTranslation } from '~shared/lib/i18n';
import { PlaceholderAsLabel } from '~shared/ui';

interface CustomSelectProps extends SelectProps {
  suffix?: any;
}

export const Select: FC<CustomSelectProps> = ({
  size = 'large',
  suffixIcon = <ArrowIcon />,
  clearIcon = <XIcon />,
  placeholder,
  value,
  suffix,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <PlaceholderAsLabel
      placeholder={placeholder === undefined ? t('actions.select') : placeholder}
      value={value}
      size={size}
      suffix={suffix}
    >
      <AntSelect
        size={size}
        suffixIcon={suffixIcon}
        clearIcon={clearIcon}
        {...props}
        value={value}
        placeholder={suffix ? placeholder + ' ' + suffix : placeholder || t('actions.select')}
      />
    </PlaceholderAsLabel>
  );
};
