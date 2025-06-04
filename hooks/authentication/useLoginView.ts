import { TLoginSchema, loginSchema } from "@/schemas/authentication";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const useLoginView = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<TLoginSchema>({
        mode: 'onSubmit',
        resolver: zodResolver(loginSchema),
        shouldFocusError: false,
        defaultValues: {
            email: "",
            password: "",
        }
    });

    return {
        control,
        handleSubmit,
        errors
    }
}

export default useLoginView;