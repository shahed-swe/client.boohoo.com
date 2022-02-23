import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup } from "../formGroup/index"
import { Text } from '../text';
import { Eye, EyeOff } from 'react-feather';

const RegistrationForm = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [show, setShow] = useState(false);


    const onSubmit = (data) => {
        const formData = {
            email: data.email,
            username: data.username,
            name: {
                firstname: data.firstname,
                lastname: data.lastname,
            },
            address: {
                city: "kilcoole",
                street: "7835 new road",
                number: "3",
                zipcode: "12926-3874",
                geolocation: {
                    lat: "-37.3159",
                    long:"81.1496"
                }
            },
            phone: "1-570-236-7033"
        }
        props.onSubmit(formData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* First Name */}
                <FormGroup>
                    {errors.firstname && errors.firstname.message ?
                        <Text className="text-danger fs-13 mb-1">{errors.firstname && errors.firstname.message}</Text> :
                        <Text className="text-capitalize fs-13 mb-1">First Name *</Text>
                    }

                    <input
                        type="text"
                        className={errors.firstname ? "form-control shadow-none error rounded-0" : "form-control shadow-none rounded-0"}
                        {...register("firstname", { required: "E-mail or Phone is required" })}
                    />
                </FormGroup>

                {/* Last Name */}
                <FormGroup>
                    {errors.lastname && errors.lastname.message ?
                        <Text className="text-danger fs-13 mb-1">{errors.lastname && errors.lastname.message}</Text> :
                        <Text className="text-capitalize fs-13 mb-1">Last Name *</Text>
                    }

                    <input
                        type="text"
                        className={errors.lastname ? "form-control shadow-none error rounded-0" : "form-control shadow-none rounded-0"}
                        {...register("lastname", { required: "E-mail or Phone is required" })}
                    />
                </FormGroup>
                {/* E-mail */}
                <FormGroup>
                    {errors.email && errors.email.message ?
                        <Text className="text-danger fs-13 mb-1">{errors.email && errors.email.message}</Text> :
                        <Text className="text-capitalize fs-13 mb-1">E-mail *</Text>
                    }

                    <input
                        type="text"
                        className={errors.email ? "form-control shadow-none error rounded-0" : "form-control shadow-none rounded-0"}
                        {...register("email", { required: "E-mail or Phone is required" })}
                    />
                </FormGroup>

                {/* Username */}
                <FormGroup>
                    {errors.username && errors.username.message ?
                        <Text className="text-danger fs-13 mb-1">{errors.username && errors.username.message}</Text> :
                        <Text className="text-capitalize fs-13 mb-1">User Name *</Text>
                    }

                    <input
                        type="text"
                        className={errors.username ? "form-control shadow-none error rounded-0" : "form-control shadow-none rounded-0"}
                        {...register("username", { required: "E-mail or Phone is required" })}
                    />
                </FormGroup>



                {/* Password */}
                <FormGroup>
                    {errors.password && errors.password.message ?
                        <Text className="text-danger fs-13 mb-1">{errors.password && errors.password.message}</Text> :
                        <Text className="text-capitalize fs-13 mb-1">Password *</Text>
                    }

                    <div style={{ position: "relative" }}>
                        <input
                            type={show ? "text " : "password"}
                            className={errors.password ? "form-control shadow-none error rounded-0" : "form-control shadow-none rounded-0"}
                            {...register("password", { required: "Password is required" })}
                        />

                        {show ?
                            <Eye
                                size={16}
                                style={{
                                    cursor: "pointer",
                                    position: "absolute",
                                    top: 13,
                                    right: 13
                                }}
                                onClick={() => setShow(!show)}
                            />
                            :
                            <EyeOff
                                size={16}
                                style={{
                                    cursor: "pointer",
                                    position: "absolute",
                                    top: 13,
                                    right: 13
                                }}
                                onClick={() => setShow(!show)}
                            />
                        }
                    </div>
                </FormGroup>

                {/* Submit button */}
                <div className='d-flex justify-content-end'>
                    <button
                        type="submit"
                        className="btn btn-primary rounded-0 ps-4 pe-4"
                    >
                        REGISTRATION
                    </button>
                </div>



            </form>
        </div>
    );
};

export default RegistrationForm;