import LoginForm from "./section/LoginForm";

export default function LoginPage() {
    return (
        <div className="w-full h-dvh flex">
            <div className="grow h-full bg-blue-100"></div>
            <div className="w-[25rem] h-full py-6 px-12 flex flex-col">
                <div className="flex items-center gap-1">
                    <img src={'/static/images/logo.svg'} alt="brand-image" className="h-8" />
                    <h1 className="text-base text-neutral-600 font-bold">G-INVENTORY</h1>
                </div>
                <div className="grow w-full flex flex-col justify-center">
                    <p className="text-rose-500 text-lg font-bold text-start mb-7">Login</p>
                    <div className="w-full mb-7">
                        <p className="text-neutral-600 text-sm font-semibold">Login to your account</p>
                        <p className="text-xs text-neutral-500">Thank you for get back. Lets access application for manage your inventory.</p>
                    </div>
                    <LoginForm />
                    <div className="w-full text-center">
                        <span className="text-xs text-neutral-500 me-1">Forgot your password?</span>
                        <a href="#" className="text-xs text-red-500">Contact Admin</a>
                    </div>
                </div>
            </div>
        </div>
    );
}