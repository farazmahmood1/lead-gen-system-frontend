"use client";

export default function Checkbox(props) {
    const {
        label,
        ...rest
    } = props
    return (
        <div className="inline-flex items-center">
            <label className="flex items-center cursor-pointer relative" for="checkbox">
                <input type="checkbox"
                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded hover:shadow-md border border-[#848484] checked:bg-[#0E6EA9] checked:border-[#0E6EA9]"
                    id="checkbox"
                    {...rest}
                />
                <span
                    className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="1"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </span>
            </label>
            {label && (
                <label
                    className="cursor-pointer ml-3 text-black text-lg font-light"
                    for="checkbox"
                >
                    {label}
                </label>
            )}
        </div>
    )
};
