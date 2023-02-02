import React, { useState } from "react";
import { useFormValidation } from "../Authinticate/hooks/useFormValidation";
import instance from "../../services/index"
import { useDispatch } from "react-redux";
// import {getAllCourse} from "../../actions/courseActions"
import {loginInfo, meInfo, setIsLoggedIn} from "../../Store/actions/userActions"
import { NavLink, useHistory } from "react-router-dom"
const Login = () => {
  const history = useHistory();
  const dispatch =useDispatch();
  const [dynamicErrors, setDynamicErrors] = useState(
    {
      email: "",
      password: ""
    }
  )
  const submit = async () => {
    setDynamicErrors({
      email: '',
      password: ''
    });
    try {
      const res = await instance.post('/student/authenticate', {
        ...data
      });
      if (res && res.data) {
        localStorage.setItem('token', res.data?.token);
      }
      dispatch(meInfo(res));
      dispatch(setIsLoggedIn(true));
      // dispatch(loginInfo(res))
      history.push('/dashboard')

    }
      catch (error) {
      console.log(error.response)
      if (error.response.status === 409) {
        setDynamicErrors({
          ...dynamicErrors,
          ...error.response?.data?.password && { password: 'Incorrect Password' },
          ...error.response?.data?.email && { email: 'Incorrect email' },
        })
      }
    }
  }
  const { data, errors, handleChange, handleSubmit } = useFormValidation({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: {
      email: {
        required: {
          value: true,
          message: "email is a required",
        },
      },
      password: {
        required: {
          value: true,
          message: "Password is a required",
        },
        minlength: {
          // value: 8,
          message: "Minlength of 8 characters required",
        },
      },
    },
    submit:submit
  });
  return (
    <div>
    <form onSubmit={handleSubmit} className=" py-6 mx-2">
      <div>
        <input
          onChange={handleChange("email")}
          type="text"
          className="w-11/12 mx-6 py-4 md:border-b-2 border-gray-300  outline-none  text-lg font-sans "
          id="email"
          placeholder="USER NAME"
        />
        {errors && errors.email && (
          <p className="text-red-400 ml-6">{errors.email}</p>
        )}
        {dynamicErrors && dynamicErrors.email &&(
            <p className="text-xs text-red-500 ml-6">{dynamicErrors.email}</p>
          )}
      </div>
      <div>
        <input
          onChange={handleChange("password")}
          type="password"
          className="w-11/12 ml-6 mr-6 py-4 border-b-2 border-gray-400  outline-none  hover:border-gray-900  text-lg font-sans"
          placeholder="PASSWORD"
        />{" "}
        {errors && errors.password && (
          <p className="text-red-400 ml-6">{errors.password}</p>
          )}
          {dynamicErrors && dynamicErrors.password &&(
            <p className="text-xs text-red-500 ml-6">{dynamicErrors.password}</p>
          )}
      </div>
      <div className="flex justify-center items-center mt-6">
        <a className="border-b-2  border-gray-400 hover:border-gray-600  text-xl font-sans">
          ForgotPassword?
        </a>
      </div>
      <div className="flex justify-center items-center mt-6">
        <button 
         type="submit"
          className="bg-yellow-400 md:mb-16 md:mt-8 py-2 px-10 text-xl font-sans text-white border
                    focus:outline-none "
        >
          SIGN IN
        </button>
      </div>
    </form>
    </div>
  );
};
export default Login;