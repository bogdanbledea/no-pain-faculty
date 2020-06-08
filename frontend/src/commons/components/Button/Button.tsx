import React from 'react';
import { BaseButton } from './Button.styled';
import { SpaceProps } from 'commons/types/SpaceProps';

export type ButtonProps = SpaceProps & {
  children: any;
  onClick?: () => void;
  buttonType?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | undefined;
}

const Button = (props:ButtonProps) => {
  const { children } = props;
  return (
    <BaseButton {...props}>
      {children}
    </BaseButton>
  );
}

export default Button;