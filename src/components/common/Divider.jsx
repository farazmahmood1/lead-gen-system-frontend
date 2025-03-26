export default function Divider({ children }) {
    return (
        <div className="w-full my-2 relative">
            <div className="h-[1px] bg-[#7A7A7A] opacity-60 w-full" />
            {children &&
                <span className="bg-white text-[#A1A1A1] font-light text-lg px-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {children}
                </span>}
        </div>
    )
};
