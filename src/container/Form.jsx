import React from "react";
import { useForm } from "react-hook-form";
import { Button} from "semantic-ui-react";
import {CustomCheckbox,CustomDropdown,CustomInput,CustomRadioButton,CustomTextArea} from "../components/FormInputs";
import { namevalidation, emailvalidation,
     contactvalidation, dropvalidation, 
     checkboxvalidation, RadioValidation,
      Agevalidation, textareavalidation, normalizePhone} from "../Utils/Validation";


function Formm() {
  const {register, handleSubmit,setValue,trigger,getValues,reset,
    formState: { errors }} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

console.log(errors);

const Reset=()=> {
  reset()
};
  return (
    <div className="container">
      <div className="spann"> 
      <span>Registration Form</span>
      </div>
      <div className="forms">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="content">

            <CustomInput
              name="Name"
              type="text"
              register={register}
              errors={errors}
              setValue={setValue}
              trigger={trigger}
              validations={namevalidation}
            />

            <CustomInput
              name="Age"
              type="text"
              register={register}
              errors={errors}
              setValue={setValue}
              trigger={trigger}
              validations={Agevalidation}
            />
          </div>
          <br />
          <div className="content">
            <CustomInput
              name="Email"
              type="email"
              register={register}
              errors={errors}
              setValue={setValue}
              trigger={trigger}
              validations={emailvalidation}
            />
            <CustomInput
              name="Password"
              type="password"
              register={register}
              errors={errors}
              setValue={setValue}
              trigger={trigger}
              validations={dropvalidation}
            />
          </div>
          <br />
          <div className="content">
            <CustomInput
              name="Contact"
              type="text"
              normalize={normalizePhone}
              register={register}
              errors={errors}
              setValue={setValue}
              trigger={trigger}
              validations={contactvalidation}
            />
            <CustomDropdown
              name="Department"
              clearable={true}
              fluid={true}
              multiple={true}
              search={true}
              selection={true}
              setValue={setValue}
              errors={errors}
              trigger={trigger}
              register={register}
              validations={dropvalidation}
            />
          </div>
          <br />
          <div className="content">
            <CustomRadioButton
              register={register}
              errors={errors}
              name="Gender"
              validations={RadioValidation}
              setValue={setValue}
              getValues={getValues}
              trigger={trigger}
            />
          </div>
          <CustomTextArea
            name="Comments"
            errors={errors}
            setValue={setValue}
            trigger={trigger}
            register={register}
            validations={textareavalidation}
          
          />
          
          <br />
          <CustomCheckbox
            name="checkbox"
            register={register}
            errors={errors}
            validations={checkboxvalidation}
            setValue={setValue}
            trigger={trigger}
            getValues={getValues}
          />
          <br />
          <br />
          <Button className="button-container" type="submit" color="black">
            Submit
          </Button>
          <Button className="button-container" type="button" color="black" onClick={Reset}>
            delete
          </Button>
        </form>
      </div>
    </div>
  );

}

//show me
export default Formm;
