import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="flex flex-col  gap-y-1 p-3">
      <label className="text-base font-medium text-gray-400">{label}</label>
      <div className="flex justify-center">
        <input
          className=" p-2 w-90 rounded-lg border border-green-950 "
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
        />
      </div>

      <span className="hidden text-red-500 text-xs">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
