'use client';
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface FormValues {
    email: string;
    password: string;
}

interface FormErrors {
    email?: string;
    password?: string;
}
// interface SigninProps {
//     onLogin: () => void; // Callback function to update isLoggedIn state
// }

const Signin: React.FC = () => {
    const [values, setValues] = useState<FormValues>({ email: '', password: '' });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState<string | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);

    const validate = (values: FormValues): FormErrors => {
        let errors: FormErrors = {};

        // Email validation
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Email address is invalid";
        }

        // Password validation
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }

        return errors;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: undefined
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setIsSubmitting(true);
    };

    useEffect(() => {
        const login = async () => {
            if (isSubmitting && Object.keys(errors).length === 0) {
                setIsLoading(true);
                try {
                    const response = await axios.post('http://localhost:8000/api/v1/admin/login', values);
                    setAccessToken(response.data.accessToken);
                    console.log("Form submitted successfully", response.data);
                    alert("Login successful");
                    // Handle successful login (e.g., redirect, etc.)
                } catch (error) {
                    console.error("Login failed", error);
                    setLoginError("Email or password is not valid");
                } finally {
                    setIsLoading(false);
                    setIsSubmitting(false);
                }
            } else {
                setIsSubmitting(false);
            }
        };
        login();
    }, [isSubmitting, errors, values]);

    useEffect(() => {
        if (accessToken) {
            console.log("Access token:", accessToken);
        }
    }, [accessToken]);
    return (
        <div className='relative rounded-lg max-w-lg m-auto bg-black-10 px-4 pt-5 pb-4 border-black-20 shadow-[0_2px_4px_rgba(57,62,86,0.5)]'>
            <div className='relative rounded-lg max-w-lg m-auto bg-bl'>
                <div className='flex min-h-full flex-col justify-center'>
                    <div className='mx-auto w-full max-w-md'>
                        <h2 className='text-center text-black-100 mt-6 text-3xl'>
                            Sign in to account
                        </h2>
                    </div>
                    <div className='mt-8 mx-auto w-full max-w-md'>
                        <form onSubmit={handleSubmit} className='space-y-6'>
                            <div>
                                <label htmlFor='email' className='block text-sm font-medium text-black-100'>
                                    Email
                                </label>
                                <div className='mt-1'>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        autoComplete='email'
                                        required
                                        className='block w-full shadow-sm sm:text-sm focus:ring-black-100 focus:border-black-100 border-gray-300 rounded-md'
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <p className='text-red-500 text-xs'>{errors.email}</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor='password' className='block text-sm font-medium text-black-100'>
                                    Password
                                </label>
                                <div className='mt-1'>
                                    <input
                                        type='password'
                                        id='password'
                                        name='password'
                                        autoComplete='password'
                                        required
                                        className='block w-full shadow-sm sm:text-sm focus:ring-black-100 focus:border-black-100 border-gray-300 rounded-md'
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                    {errors.password && <p className='text-red-500 text-xs'>{errors.password}</p>}
                                </div>
                            </div>
                            {loginError && <p className='text-red-500 text-xs'>{loginError}</p>}
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <input
                                        id='remember_me'
                                        name='remember_me'
                                        type='checkbox'
                                        className='h-4 w-4 rounded border-gray-300 text-sm text-black-100'
                                    />
                                    <label htmlFor='remember_me' className='ml-2 block text-sm text-black-100'>
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div>
                                <button
                                    type='submit'
                                    className='disabled:opacity-40 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2'
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Signing in..." : "Sign in"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
