import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup } from "../formGroup/index"
import { Text } from '../text';
import { Eye, EyeOff } from 'react-feather';

const LoginForm = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [show, setShow] = useState(false);
    

    return (
        <div>
            <form onSubmit={handleSubmit(props.onSubmit)}>

                {/* E-mail */}
                <FormGroup>
                    {errors.username && errors.username.message ?
                        <Text className="text-danger fs-13 mb-1">{errors.username && errors.username.message}</Text> :
                        <Text className="text-capitalize fs-13 mb-1">E-mail / Phone *</Text>
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
                        className="btn btn-primary rounded-0 ps-4 pe-4 shadow-none"
                    >
                        LOG IN
                    </button>
                </div>



            </form>
        </div>
    );
};

export default LoginForm;