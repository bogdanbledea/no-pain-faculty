import React from 'react';
import { BaseButton } from './Button.styled';
import { SpaceProps } from 'commons/types/SpaceProps';

export type ButtonProps = SpaceProps & {
  children: any;
  onClick?: () => void;
  buttonType?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | undefined;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = (props:ButtonProps) => {
  const { children, type } = props;
  return (
    <BaseButton type={type} {...props}>
      {children}
    </BaseButton>
  );
}

export default Button;