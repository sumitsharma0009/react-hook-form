import {TextArea } from "semantic-ui-react";

function CustomTextArea({ name, setValue, trigger, errors, validations,register}) {
  const Change = (e, { name, value }) => {
    setValue(name, value);
  };

  const handleBlur = () => {
    trigger(name);
  };

  return (
    <div className="check">
      <div className="input-box">
        <label>{name}</label>
        <TextArea name={name}
         onChange={Change} 
         onBlur={handleBlur} 
         {...register(name,validations)}/>
      </div>
      {errors[name]?.type === "maxLength" && (
        <p>Enter {name} less than 250 characters</p>
      )}
    </div>
  );
}
export default CustomTextArea;
