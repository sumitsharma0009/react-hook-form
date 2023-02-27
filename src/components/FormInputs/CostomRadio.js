import React from "react";
import { Label, Radio } from "semantic-ui-react";

const CustomRadioButton = ({
  register,
  errors,
  setValue,
  trigger,
  name,
  getValues,
  validations,
}) => {
  const value = getValues(name);
  const handleChange = (event, { name, value }) => {
    setValue(name, value);
    trigger(name);
  };
  return (
    <div className="input-box">
      <label>{name}</label>
      <div className="radio-button">
        <Radio
          label="Male"
          name={name}
          input={{ ...register(name, validations) }}
        value="Male"
          checked={value === "Male"}
          onChange={handleChange}
          
        />
        <Radio
          label="Female"
          name={name}
          input={{ ...register(name, validations) }}
          value="Female"
          checked={value === "Female"}
          onChange={handleChange}
        />
        <Radio
          label="Other"
          name={name}
          input={{ ...register(name, validations) }}
          value="Other"
          checked={value === "Other"}
          onChange={handleChange}
        />
      </div>
      {errors[name]?.type === "required" && (
        <Label basic color="red" pointing="left">
          select Gender
        </Label>
      )}
    </div>
  );
 
};
export default CustomRadioButton;
