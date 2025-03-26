import Link from 'next/link';
import {
    Button,
    Input,
    Checkbox,
    Divider,
} from '@/components/common';

export default function SignupPage() {
    return (
        <div className="w-full">
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-medium text-[#0E6EA9] leading-none">Create an account</h1>
                <p className="text-[20px] font-light leading-none">Let’s get started!</p>
            </div>
            <form className="w-full">
                <div className="w-full flex flex-col gap-6 mt-12">
                    <Input label="Name*" />
                    <Input label="Email*" type="email" />
                    <div className="flex flex-col lg:flex-row gap-6">
                        <Input label="Password*" type="password" />
                        <Input label="Confrim Password*" type="password" />
                    </div>
                    <Checkbox label="Accept our terms and conditions" />
                    <Button size="lg" className="mt-4">Create Account</Button>
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
                        Sign up with Google
                    </Button>
                    <div className="text-[#989898] text-[17px] text-center">
                        Already a member? <Link href={'/login'} className="text-[#0E6EA9] hover:underline">Login</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}