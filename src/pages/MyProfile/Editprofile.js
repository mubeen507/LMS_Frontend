import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import instance from '../../services';
import { useFormValidation } from "../Authinticate/hooks/useFormValidation"
import { RiDeleteBin5Line } from "react-icons/ri"
function Editprofile() {
    const state = useSelector(state => state.me)
    console.log(" me ", state)
    const submit = async () => {
        try {
            const res = await instance.post("/student/edit", {
                ...data
            })
           // setValues(data)
        }
        catch (error) {
            console.log(error.response)
        }
    }
    const { data, errors, type, handleChange, handleSubmit, setValues } = useFormValidation({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            profilePicture: ''
        },
        validationSchema: {
            firstname: {
                required: {
                    value: true,
                    message: "cannot be empty",
                },
            },
            lastname: {
                required: {
                    value: true,
                    message: "cannot be empty",
                },
            },
            email: {
                required: {
                    value: true,
                    message: "cannot be empty",
                },
            },
            phone: {
                required: {
                    value: true,
                    message: "cannot be empty",
                },
            },
            profilePicture: {
                required: {
                    value: true,
                    message: "cannot be empty",
                },
            },
        },
        submit: submit
    });
    useEffect(() => {
        console.log(state);
        if (state) {
            setValues(state);
        }
    }, [state])
    
    const [image, setImage] = useState();
    const [preview, setPreview] = useState(false);
    const fileInputRef = useRef();
    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(image);
        } else {
            setPreview(null);
        }
    }, [image]);
    const removephoto = () => {
        setImage(null)
        console.log("removing photo")
    }
    const uploadImg = async (e) => {
        try {
            const getBase64 = (file) => new Promise(function (resolve, reject) {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result)
                reader.onerror = (error) => reject('Error: ', error);
            })
            let imgSrc = await getBase64(e.target.files[0]);
            console.log(imgSrc);
            const fd = new FormData();
            fd.append('profilePicture', imgSrc)
            const res = await instance.post('/student/updateProfilePic', fd);
            setValues({
                ...data,
                profilePicture: imgSrc
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit}>
                <div className=" flex h-2/5 text-xl mt-8 ">
                    {data.profilePicture == '' ? (
                        <img
                            src={preview} className="w-32 h-32 rounded-full"
                            onClick={(event) => {
                                event.preventDefault();
                                fileInputRef.current.click();
                            }}
                        />
                    ) : (
                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                fileInputRef.current.click();
                            }}
                        >
                            <img src={data.profilePicture} className="w-32 h-32 rounded-full" ></img>
                        </button>
                    )}
                    <input
                        type="file"
                        className="display:none hidden"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={uploadImg}
                    />
                    <div className="">
                        <RiDeleteBin5Line className=" float-right cursor-pointer bg-yellow-400 mt-32" onClick={removephoto} />
                    </div>
                    <div className="font-semibold  ml-5  mt-16 "> {state.firstname} {state.lastname}
                    </div>
                </div>
                <div className="flex  text-thin  mb-6 pt-8 ">
                    <input
                        onChange={handleChange("firstname")}
                        placeholder="Firstname"
                        value={data.firstname}
                        type="text" className="border-b-2 w-1/2 hover:border-gray-900 outline-none "
                    />
                    {errors && errors.firstname && (
                        <p className=" text-red-400 md:ml-16">{errors.firstname}</p>
                    )}
                </div >
                <div className="flex  text-thin  pb-8 "  >
                    <input
                        onChange={handleChange("lastname")}
                        placeholder="Lastname"
                        value={data.lastname}
                        type="text" className="border-b-2 w-1/2 hover:border-gray-900 outline-none "
                    />
                    {errors && errors.lastname && (
                        <p className="text-red-400 md:ml-16">{errors.lastname}</p>
                    )}
                </div>
                <div className="flex  text-thin  pb-8 ">
                    <input
                        onChange={handleChange("email")}
                        placeholder="Email Id"
                        value={data.email}
                        type="text" className="border-b-2 w-1/2 hover:border-gray-900 outline-none "
                    />
                    {errors && errors.email && (
                        <p className="text-red-400 md:ml-16">{errors.email}</p>
                    )}
                </div>
                <div className="flex  text-thin  pb-8  ">
                    <input
                        onChange={handleChange("phone")}
                        placeholder="Phone"
                        value={data.phone}
                        type="number"
                        className="border-b-2 w-1/2 hover:border-gray-900 outline-none  "
                    />
                    {errors && errors.phone && (
                        <p className="text-red-400 md:ml-16">{errors.phone}</p>
                    )}
                </div >
                <div className="flex mb-14">
                    <button onClick={submit}
                        type="submit"
                        className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4" >Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Editprofile;