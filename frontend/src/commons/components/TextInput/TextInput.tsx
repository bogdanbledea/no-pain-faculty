import React from 'react';
import { Input } from './TextInput.styled';

export type TextInputProps = {
  type: string;
  maxLength?: number;
  placeholder?: string;
  name?: string;
  inputRef?:any;
}

const TextInput = (props:TextInputProps) => {
  const { type, maxLength, placeholder, name, inputRef } = props;

  return <Input name={name} type={type} ref={inputRef} maxLength={maxLength} placeholder={placeholder} />
}

export default TextInput;