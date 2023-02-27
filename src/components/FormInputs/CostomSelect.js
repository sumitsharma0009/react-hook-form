import { Dropdown, Label } from "semantic-ui-react";

const Options = [
  { key: "a", value: "Computer Science", text: "Computer" },
  { key: "b", value: "Physics", text: "Physics" },
  { key: "c", value: "Chemistry", text: "Chemistry" },
  { key: "d", value: "Biology", text: "Biology" },
  { key: "e", value: "Mathematics", text: "Mathematics" },
];
const CustomDropdown = ({
  placeholder,
  name,
  clearable,
  fluid,
  multiple,
  trigger,
  search,
  selection,
  setValue,
  errors,
  register,
  validations,
}) => {
  const Change = (e, { name, value }) => {
    setValue(name, value);
  };

  const handleBlur = () => {
    trigger(name);
  };

  return (
    <div className="input-box">
      <label>{name}</label>
      <Dropdown
        name={name}
        {...register(name,validations)}
        clearable={clearable}
        fluid={fluid}
        multiple={multiple}
        search={search}
        selection={selection}
        options={Options}
        placeholder={placeholder}
        onChange={Change}
        onBlur={handleBlur}
        
      />
      {errors[name]?.type === "required" && (
        <Label basic color="red" pointing="left">
          select one from {name}
        </Label>
      )}
    </div>
  );
};
export default CustomDropdown;
