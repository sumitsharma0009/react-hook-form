import React from "react";
import { Input, Form, Popup, Icon, Label } from "semantic-ui-react";

function CustomInput({
  setValue,
  trigger,
  errors,
  name,
  focus,
  type,
  validations,
  register,
  normalize,
  //defaultValue,
}) {
  const handleChange = (e, { name, value }) => {
    setValue(name, value);
    if (normalize) {
      console.log(normalize(value))
      e.target.value = normalize(value);
      setValue(name, normalize(value));
    }
    else{
      setValue(name, value);
    }
    trigger(name);
  };

  const handleBlur = () => {
    trigger(name);
  };

  return (
    <Form.Field>
      <div className="input-box">
        <div>
          <label>{name}</label>
          {name === "Age" && (
            <Popup
              trigger={
                <Icon color="grey" name="question circle" size="small" />
              }
              content="Age is between 18 and 40"
            />
          )}
        </div>
        <Input
     //   defaultValue={defaultValue}
          type={type}
          name={name}
         // validations={validations}
          { ...register(name, validations)}
          onChange={handleChange}
          onBlur={handleBlur}
          focus={focus}          
        />

        {errors[name]?.type === "required" && (
          <Label basic color="red" pointing="left">
            Please Enter your {name}
          </Label>
        )}
        {errors[name]?.type === "pattern" && (
          <p>Please check pattern of {name}</p>
        )}
        {errors[name]?.type !== "required" && errors[name]?.type === "min" && (
          <p> {name} is greater than 17</p>
        )}
        {errors[name]?.type !== "required" && errors[name]?.type === "max" && (
          <p> {name} is below 40</p>
        )}
      </div>
    </Form.Field>
  );
}

export default CustomInput;
