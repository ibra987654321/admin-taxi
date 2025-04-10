import { Input } from 'antd';
import { TextAreaProps } from 'antd/es/input';

import { FC } from 'react';

import { PlaceholderAsLabel } from '~shared/ui/layout';

interface CustomTextAreaProps extends TextAreaProps {
  suffix?: string;
}

export const TextArea: FC<CustomTextAreaProps> = ({
  size = 'large',
  placeholder,
  value,
  suffix,
  ...props
}) => {
  return (
    <PlaceholderAsLabel placeholder={placeholder} value={value} suffix={suffix}>
      <Input.TextArea
        {...props}
        placeholder={suffix ? placeholder + ' ' + suffix : placeholder}
        value={value}
      />
    </PlaceholderAsLabel>
  );
};
