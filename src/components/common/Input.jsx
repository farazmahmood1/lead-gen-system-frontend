"use client";
import { useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import clsx from "clsx";

export default function Input({
    label = '',
    type,
    value = '',
    helperText = '',
    error = false,
    ...props
}) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="w-full min-w-[200px]">
            <div className="relative w-full">
                <input
                    className={clsx(
                        "peer bg-white w-full placeholder:text-slate-400 text-[18px] border border-[#848484] rounded-lg px-3 py-3 transition duration-300 ease focus:outline-none focus:border-[#0E6EA9] hover:border-[#0E6EA9]",
                        { "pr-10": type === "password" },
                        { "border-red-500 focus:border-red-500": error },
                    )}
                    type={type === "password" ? showPassword ? "text" : "password" : type}
                    value={value}
                    {...props}
                />
                {type === "password" && (
                    <button
                        className="rounded-md border border-transparent p-2.5 text-center text-slate-600 absolute right-1 top-1 cursor-pointer" type="button"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <IconEye size={24} /> : <IconEyeOff size={24} />}
                    </button>
                )}
                {helperText && (
                    <p className={clsx("flex items-start mt-2 text-xs px-4", error ? "text-red-500" : "text-slate-400")}>
                        {helperText}
                    </p>
                )}
                {label && (
                    <label className={clsx(
                        "absolute pointer-events-none cursor-text bg-white px-1.5 text-[18px] transition-all transform origin-left peer-focus:-top-2.5 peer-focus:left-2.5 peer-focus:scale-90 font-light",
                        {
                            "text-red-500": error,
                            "left-2.5 top-3.5": !value,
                            "-top-2.5 left-2.5 scale-90": value,
                        }
                    )}>
                        {label}
                    </label>
                )}
            </div>
        </div >
    )
};
