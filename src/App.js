import { useState } from "react";

import FormInput from "./components/FormInput";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",

    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)

  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen "
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <form onSubmit={handleSubmit} className="bg-white p-5 rounded-lg w-96">
        <h1 className="text-xl font-medium uppercase text-primary mb-4 text-center"> Register</h1>
        {inputs.map((input) => (
          <FormInput

            key={input.id}
            name={input.name}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="mt-4" type="Submit">
          <button className="w-full bg-primary text-white py-2 px-4 rounded-md font-medium">Submit</button>

        </div>
      </form>


    </div>
  );
};

export default App;