import { useState } from "react";

const FormInput = ({
  label,
  errorMessage = "",
  onChange,
  id,
  name,
  ...inputProps
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };
  console.log(errorMessage);
  return (
    <div className="flex flex-col  gap-y-1 p-3">
      <label className="text-base font-medium text-gray-400">{label}</label>
      <div className="flex justify-center">
        <input
          className=" p-2 w-90 rounded-lg border border-green-950 "
          name={name}
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() => name === "confirmPassword" && setFocused(true)}
          focused={focused.toString()}
        />
      </div>

      {errorMessage && (
        <span className="text-red-500 text-xs">{errorMessage}</span>
      )}
    </div>
  );
};

export default FormInput;
