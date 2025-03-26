import Image from "next/image";

export default function AuthLayout({ children }) {
    return (
        <div className="flex lg:items-center lg:justify-center min-h-screen px-6 py-16 lg:py-6">
            <div className="w-full max-w-[1150px] mx-auto flex flex-col lg:flex-row gap-20 lg:items-center">
                <div className="flex-1/2 hidden lg:block">
                    <Image
                        src={'/assets/auth-cover.png'}
                        alt={'logo'}
                        width={560}
                        height={786}
                        className="w-full h-auto"
                    />
                </div>
                <div className="flex-1/2">
                    <div className="flex flex-col items-start gap-8 max-w-[500px] mx-auto">
                        <Image
                            src={'/assets/logo.png'}
                            alt={'logo'}
                            width={134}
                            height={120}
                            className="w-auto h-[100px]"
                        />
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
