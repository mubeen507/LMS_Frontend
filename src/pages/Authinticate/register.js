import React,{useState} from 'react'
import useForm from '../Authinticate/hooks/useForm';
import validate from '../Authinticate/hooks/validationForm'
import instance from "../../../src/services/index"
import { useHistory } from 'react-router';
import { meInfo, setIsLoggedIn } from '../../Store/actions/userActions';
import { useDispatch } from 'react-redux';
const Register = () => {
  const dispatch = useDispatch();
  const [dynamicErrors, setDynamicErrors] = useState(
    {
      email: "",
      phone:""      
    }
  )
  const history=useHistory();
  const submit = async () => {
    console.log("data",values)
    setDynamicErrors({
      email: '',
      phone:""     
    });
    try {
      const res = await instance.post('/student/create', {
        ...values
      });
      dispatch(meInfo(res));
      dispatch(setIsLoggedIn(true));
      if (res && res.data) {
        localStorage.setItem('token', res.data?.token);
      }
      history.push('/dashboard')
    }
    catch (error) {
      console.log(error.response)
      if (error.response.status === 409) {
        setDynamicErrors({
          ...dynamicErrors,
          ...error.response?.data?.email && { email: 'email already exists' },
          ...error.response?.data?.phone && {phone:"Phone already exists"}
        })
      }
    }
  }
  const {data,handleChange,handleSubmit,values,errors} = useForm(submit,validate)
    return (
        <form onSubmit={handleSubmit} className="mx-4 py-4 ">
      <div className="grid grid-cols-2">
        <input
          value={values.firstname} onChange={handleChange}
          type="text"
          className="w-4/5  mx-6 border-b-2 border-gray-300  outline-none py-4 md:text-lg  font-sans hover:border-gray-900 "
        name="firstname"
          placeholder="FIRST NAME"
        />
        <input
          value={values.lastname} onChange={handleChange}
          type="text"
          className="md:w-5/6  mx-6   md:border-b-2 border-gray-300  outline-none sm:py-4  md:text-lg  font-sans hover:border-black-900 "
          name="lastname"
          placeholder="LAST NAME"
        />
        {errors.firstname && <p className="text-red-400 ml-6">{errors.firstname}</p>}
        {errors.lastname && <p className="text-red-400 ml-6">{errors.lastname}</p>}
      </div>
      <div className="overflow-ellipsis overflow-hidden">
        <input
          value={values.email} onChange={handleChange}
          name="email"
          type="email"
          className="w-11/12  mx-6      border-b-2 border-gray-400 sm:py-4  outline-none  hover:border-gray-900  md:text-lg font-sans"
          placeholder="E-EMAIL"
        />{" "}
        {errors.email && <p className="text-red-400 ml-6">{errors.email}</p>}
        {dynamicErrors && dynamicErrors.email &&(
            <p className="text-red-400 ml-6">{dynamicErrors.email}</p>
          )}
      </div>
      <div className="">
        <input
          value={values.phone} onChange={handleChange}
          name="phone"
          type="number"
          className="w-11/12   mx-6   border-b-2 border-gray-400 sm:py-4 outline-none  hover:border-gray-900  md:text-lg font-sans"
          placeholder="PHONE NUMBER"
        />{" "}
        {errors.phone && <p className="text-red-400 ml-6">{errors.phone}</p>}
        {dynamicErrors && dynamicErrors.phone && (
          <p className="text-red-400 ml-6">{dynamicErrors.phone}</p>
        )}
      </div>
      <div className="grid grid-cols-2">
        <input
        value={values.password} onChange={handleChange}
        name="password"
          type="password"
          className="md:w-4/5 mx-6   overflow-ellipsis overflow-hidden sm:py-4 md:border-b-2 border-gray-300  outline-none   md:text-lg font-sans hover:border-gray-900 "
          placeholder="PASSWORD"
        />
        <input
          value={values.confirmpassword} onChange={handleChange}
          name="confirmpassword"
          type="password"
          className="md:w-5/6   mx-6 md:border-b-2 border-gray-300 sm:py-4 outline-none  md:text-lg font-sans hover:border-gray-900 "
          placeholder="CONFIRM PASSWORD"
        />
        {errors.password && <p className="text-red-400 ml-6">{errors.password}</p>}
        {errors.confirmpassword && <p className="text-red-400 ml-6">{errors.confirmpassword}</p>}
      </div>
      <div className="flex justify-center items-center mt-6">
        <button
        type="submit" onClick={submit}
          className="bg-red-500 md:mb-16 md:mt-8 py-2 px-10  md:text-lg font-sans text-white  border
                    focus:outline-none "
        >
          SIGN UP
        </button>
      </div>
    </form>
    )
}
export default Register