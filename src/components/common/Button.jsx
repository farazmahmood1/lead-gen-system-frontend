"use client";
import clsx from "clsx";

export default function Button({
    children,
    size = 'md',
    className,
    variant,
    ...props
}) {
    return (
        <button
            className={clsx(
                "rounded-full font-medium border text-center transition-all hover:shadow-md focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer py-2 px-4 text-[18px] flex gap-2 items-center justify-center",
                {
                    "bg-[#0E6EA9] border-transparent text-white focus:bg-[#0e63a9] active:bg-[#0e63a9] hover:bg-[#0e63a9]": !variant,
                    "bg-white border-[#848484] text-[#0E6EA9] hover:bg-white": variant === 'outlined',
                    "py-3 px-4 text-[20px]": size === 'lg',
                    [className]: Boolean(className),
                }
            )}
            type="button"
            {...props}
        >
            {children}
        </button >
    )
};
