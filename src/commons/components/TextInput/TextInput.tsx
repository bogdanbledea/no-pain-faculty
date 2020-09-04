import React from 'react';
import { Input, ErrorMessage } from './TextInput.styled';

export type TextInputProps = {
  type: string;
  maxLength?: number;
  placeholder?: string;
  name?: string;
  inputRef?:any;
  error?: boolean;
  message?: string;
  value?:string;
}

const TextInput = (props:TextInputProps) => {
  const { type, maxLength, placeholder, name, inputRef, error, message, value='' } = props;
  const [inputValue, setInputValue] = React.useState(value);
  

  return (
    <>
      <Input
      name={name} 
      type={type} 
      data-testid="textInput" 
      value={inputValue} 
      ref={inputRef}
      error={error}
      message={message}
      maxLength={maxLength} 
      placeholder={placeholder}
      onChange={(e:any) => setInputValue(e.target.value)} 
    />
    {message && <ErrorMessage>{message}</ErrorMessage>}
  </>
  );
}

export default TextInput;