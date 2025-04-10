import { FC } from 'react';

interface PlaceholderAsLabelProps {
  placeholder?: any;
  value?: any;
  children?: React.ReactNode;
  size?: 'large' | 'middle' | 'small';
  suffix?: any;
}

export const PlaceholderAsLabel: FC<PlaceholderAsLabelProps> = ({
  placeholder,
  value,
  children,
  size = 'large',
  suffix,
}) => {
  return (
    <div className="relative mb-1">
      <span
        className={`${
          placeholder !== false && value ? 'visible ease-out duration-200' : 'invisible'
        } absolute -top-[16px] text-placeholder ${
          size === 'small' ? 'left-2 ' : 'left-[15px]'
        } left-2 leading-[12px] text-[12px] z-[2] transition-all ease-out duration-200 opacity-[0.7]`}
      >
        {placeholder} <span className="ml-1">{suffix}</span>
      </span>
      {children}
    </div>
  );
};
