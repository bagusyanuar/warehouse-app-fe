import { ServiceResponse } from "@/commons/libs/http/http-client";
import { TLoginResponse } from "@/models/authentication";
import { TLoginSchema } from "@/schemas/authentication";
import LoginService from "@/services/LoginService";
import { useMutation } from "@tanstack/react-query";

const useMutateLogin = (service: LoginService) => {
    return useMutation<ServiceResponse<TLoginResponse>, ServiceResponse<string>, TLoginSchema>({
        mutationFn: service.login
    })
}

export default useMutateLogin;