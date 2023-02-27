export const namevalidation = {
    required: true,
    pattern: {
      value: /^[A-Za-z]+$/,
    },
  };
  
  export const emailvalidation = {
    required: true,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    },
  };
  
  export const dropvalidation = { required: true };
  
  export const textareavalidation = { maxLength: { value: 250 } };
  export const contactvalidation = { required: true };
  
  export const Agevalidation = {
    required: true,
    min:  18 ,
    max: { value: 40 },
    pattern: {
      value: /^[0-9]*$/,
      message: "Only numbers are allowed",
    },
  };
  
  export const RadioValidation = { required: true };
  
  export const checkboxvalidation = { required: true };
  
  
  export const normalizePhone = (value) => {
    if (!value) {
      return value;
    }
    const onlyNums = value.replace(/[^\d]/g, "");
    if (onlyNums.length <= 5) {
      return onlyNums;
    }
    if (onlyNums.length <= 7) {
      return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5)}`;
    }
    return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5, 10)}`;
  };
  