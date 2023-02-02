import React, { useState } from "react";
import { useFormValidation } from "../Authinticate/hooks/useFormValidation";
import instance from "../../services/index";
import { NavLink, useHistory } from "react-router-dom";
const Changepassword = () => {
  const history = useHistory();
  const [dynamicErrors, setDynamicErrors] = useState({
    password: "",

  });
  const submit = async () => {
    setDynamicErrors({
      password: "",
    });
    try {
      const res = await instance.post("/student/changePassword", {
        ...data,
      });

    } catch (error) {
      console.log(error.response);
      if (error.response.status == 409) {
        setDynamicErrors({
          ...dynamicErrors,
          ...error.response?.data?.password && { password: 'incorrect old password' },

        });
      }
    }
    // if (!input["newPassword"]) {
    //   isValid = false;
    //   errors["newPassword"] = "Please enter your password.";
    // }
    // if (!input["confirmPassword"]) {
    //   isValid = false;
    //   errors["confirmPassword"] = "Please enter your confirm password.";
    // }
    // if (
    //   typeof input["newPassword"] !== "undefined" &&
    //   typeof input["confirmPassword"] !== "undefined"
    // ) {
    //   if (input["newPassword"] != input["confirmPassword"]) {
    //     isValid = false;
    //     errors["newPassword"] = "Passwords don't match.";
    //   }
    // }
  };
  const { data, errors, input, isValid, handleChange, handleSubmit } =
    useFormValidation({
      initialValues: {
        password: "",
        newPassword: "",
        // confirmPassword: "",
      },
      validationSchema: {
        password: {
          required: {
            value: true,
            message: "incorrect oldpassword",
          }
        },
        newPassword: {
          required: {
            value: true,
            message: "incorrect newPassword",
          }
        },
        // confirmPassword: {
        //   required: {
        //     value: true,
        //     message: "incorrect confirmPassword",
        //   },
        // }
      },
      submit: submit,
    });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className=" h-1/5">
          <div className=" flex h-2/5 text-xl mt-16 "></div>
          <div className="mb-4 text-2xl">
            <input
              onChange={handleChange("password")}
              type="password"
              className="border-b-2 w-1/2 hover:border-gray-900 outline-none"
              name="password"
              placeholder="Old Password"
            />
            {errors.password && (
              <p className="text-red-400 ">{errors.password}</p>
            )}
            {dynamicErrors && dynamicErrors.password && (
              <p className="text-red-400 ml-6">{dynamicErrors.password}</p>
            )}
          </div>
        </div>
        <div className=" mb-4 text-2xl ">
          <input
            onChange={handleChange("newPassword")}
            type="password"
            className="border-b-2 w-1/2 hover:border-gray-900 outline-none"
            name="newPassword"
            placeholder="New Password"
          />
          {errors.newPassword && (
            <p className="text-red-400 text-sm ">{errors.newPassword}</p>
          )}

        </div>
        {/* <div className=" mb-4 text-2xl ">
          <input
            onChange={handleChange("confirmPassword")}
            type="password"
            className="border-b-2 w-1/2 hover:border-gray-900 outline-none"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          { errors.confirmPassword && (
            <p className="text-red-400 text-sm ">{errors.confirmPassword}</p>
          )}
         
        </div> */}
        <div className="py-6 ">
          <button onClick={submit}
            type="submit"
            className="  bg-yellow-400 hover:bg-yellow-300 text-white  py-2 px-4 text-xl"
          >
            CHANGE PASSWORD
          </button>
        </div>
      </form>
    </div>
  );
};
export default Changepassword;
