import React from "react";
import { Label, Input } from "semantic-ui-react";
const FormInput = props => {
  const { label, name, value } = props;

  return (
    <div>
      <label>
        {label}
        {props.required && <span style={{ color: "red" }}>*</span>}
      </label>
      <Input value={value} name={name} onChange={props.onChange} />
    </div>
  );
};

export default FormInput;
