import { loginRequest, LoginRequest } from "@/schemas/login";
import LoginService from "@/services/LoginService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useMutateLogin from "./useMutateLogin";

const useLoginView = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<LoginRequest>({
        mode: 'onSubmit',
        resolver: zodResolver(loginRequest),
        shouldFocusError: false,
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const service = new LoginService();
    const mutateLogin = useMutateLogin(service);

    const onSubmit = (request: LoginRequest) => {
        mutateLogin.mutateAsync(request, {
            onSuccess: response => {
                console.log(response);
            },
            onError: error => {
                console.log(error);
            },
        })
    }

    return {
        control,
        handleSubmit,
        errors,
        mutateLogin,
        onSubmit
    }
}

export default useLoginView;