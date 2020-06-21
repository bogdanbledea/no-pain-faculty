import React from 'react';
import { Input } from './TextInput.styled';

export type TextInputProps = {
  type: string;
  maxLength?: number;
  placeholder?: string;
  name?: string;
  inputRef?:any;
  value?:string;
}

const TextInput = (props:TextInputProps) => {
  const { type, maxLength, placeholder, name, inputRef, value='' } = props;
  const [inputValue, setInputValue] = React.useState(value);
  

  return (
    <Input
    name={name} 
    type={type} 
    data-testid="textInput" 
    value={inputValue} 
    ref={inputRef} 
    maxLength={maxLength} 
    placeholder={placeholder}
    onChange={(e:any) => setInputValue(e.target.value)} 
  />
  );
}

export default TextInput;