import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, TLoginSchema } from '@/schemas/authentication';
import { useMutateLogin } from '@/hooks/authentication';
import LoginService from '@/services/LoginService';

const useLoginForm = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { control, handleSubmit, formState: { errors } } = useForm<TLoginSchema>({
        mode: 'onSubmit',
        resolver: zodResolver(loginSchema),
        shouldFocusError: false,
        defaultValues: {
            email: "",
            password: "",
        }
    });
    const service = new LoginService();
    const mutateLogin = useMutateLogin(service);

    const onSubmit = (schema: TLoginSchema) => {
        setLoading(true);
        mutateLogin.mutateAsync(schema, {
            onSuccess: response => {
                console.log(response);
            },
            onError: error => {
                console.log(error);
            },
            onSettled: () => {
                setLoading(false);
            }
        })
    }
    return {
        control,
        handleSubmit,
        errors,
        onSubmit,
        loading
    }
}

export default useLoginForm;