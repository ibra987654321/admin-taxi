import React from 'react';
import { Input as AntInput, InputProps } from 'antd';

import { PassInVisibleIcon, PassVisibleIcon } from '~shared/ui/Icons/icons';
import { PlaceholderAsLabel } from '~shared/ui';

interface CustomInputProps extends InputProps {
  suffix?: any;
}

export const Input: React.FC<CustomInputProps> = ({
  type,
  size = 'large',
  placeholder,
  value,
  suffix,
  ...props
}) => {
  switch (type) {
    case 'password':
      return (
        <PlaceholderAsLabel placeholder={placeholder} value={value} suffix={suffix}>
          <AntInput.Password
            type={type}
            size={size}
            value={value}
            placeholder={placeholder}
            {...props}
            iconRender={(visible) => (visible ? PassVisibleIcon() : PassInVisibleIcon())}
          />
        </PlaceholderAsLabel>
      );
    default:
      return (
        <PlaceholderAsLabel placeholder={placeholder} value={value} suffix={suffix}>
          <AntInput
            type={type}
            size={size}
            {...props}
            value={value}
            placeholder={suffix ? placeholder + ' ' + suffix : placeholder}
          />
        </PlaceholderAsLabel>
      );
  }
};
