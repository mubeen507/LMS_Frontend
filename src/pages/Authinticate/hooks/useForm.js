import { useState } from "react";

const useForm = (callback,validate) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: ""
    
  });
  const [errors, setErrors] = useState({firstname: "",
  lastname: "",
  email: "",
  phone: "",
  password: "",
  confirmpassword: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values))
    // callback();
  };
  
  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
