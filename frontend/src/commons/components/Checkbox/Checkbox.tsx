import React from 'react';
import { CheckboxBase, Checkmark, LabelContainer } from './Checkbox.styled';

type CheckboxProps = {
  name: string;
  label?: string;
  inputRef?: any;
}

const Checkbox = (props:CheckboxProps) => {
  const [checked, setChecked] = React.useState(false);
  const { name, label, inputRef } = props;
  return (
    <LabelContainer>{label}
      <CheckboxBase name={name} type="checkbox" ref={inputRef} onChange={(e:any) => setChecked(e.target.checked)}/>
      <Checkmark isChecked={checked} />
    </LabelContainer>
  
  );
}

export default Checkbox;