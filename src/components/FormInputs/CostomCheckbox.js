import React from "react";
import { Checkbox } from "semantic-ui-react";

const CustomCheckbox = ({
  register,
  errors,
  setValue,
  trigger,
  name,
  validations,
  getValues,
}) => {
  const value = getValues(name);
  const handleClick = (event, { name, checked }) => {
    setValue(name, checked);
    trigger(name);
  };

  return (
    <div className="check">
      
        <Checkbox
          name={name}
          onClick={handleClick}
          checked={value}
          label=" I certify that all the information written in this form is completely, accurate and authentic !"
         input={{...register(name, validations)}}
        />
        {errors[name]?.type === "required" && <p>Please Check the checkbox</p>}
    
    </div>
  );
  
};
export default CustomCheckbox;
