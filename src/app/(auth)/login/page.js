"use client";
import { useState } from "react";
import Link from 'next/link';
import { useForm } from "react-hook-form";
import {
    Button,
    Input,
    Checkbox,
    Divider,
} from '@/components/common';

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const [termsCheck, setTermsCheck] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="w-full">
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-medium text-[#0E6EA9] leading-none">Login</h1>
                <p className="text-[20px] font-light leading-none">Let's get started!</p>
            </div>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full flex flex-col gap-6 mt-12">
                    <Input
                        label="Email*"
                        value={watch("email")}
                        {...register("email", {
                            required: 'Email is required!',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please provide valid email address",
                            },
                        })}
                        error={errors?.email}
                        helperText={errors?.email?.message}
                    />
                    <Input
                        label="Password*"
                        type="password"
                        value={watch("password")}
                        {...register("password", {
                            required: 'Password is required!',
                            minLength: {
                                value: 4,
                                message: "Password must be at least 4 characters",
                            },
                        })}
                        error={errors?.password}
                        helperText={errors?.password?.message}
                    />
                    <Checkbox
                        checked={termsCheck}
                        onChange={(e) => setTermsCheck(e.target.checked)}
                        label={
                            <>Accept our <Link href={'#'} className="text-[#0E6EA9] hover:underline">terms & conditions</Link></>
                        } />
                    <Button
                        size="lg"
                        className="mt-4"
                        type="submit"
                        disabled={!termsCheck}
                    >
                        Login
                    </Button>
                    <Divider>Or</Divider>
                    <Button
                        size="lg"
                        variant="outlined"
                    >
                        <img
                            src="https://docs.material-tailwind.com/icons/google.svg"
                            alt="metamask"
                            class="h-5 w-5 mr-2"
                        />
                        Login with Google
                    </Button>
                    <div className="text-[#989898] text-[17px] text-center">
                        Don’t have account? <Link href={'/signup'} className="text-[#0E6EA9] hover:underline">Sign Up</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}