import { ServiceError, ServiceResponse } from "@/commons/libs/http/http-client";
import { LoginResponse, LoginRequest } from "@/schemas/login";
import LoginService from "@/services/LoginService";
import { useMutation } from "@tanstack/react-query";

const useMutateLogin = (service: LoginService) => {
    return useMutation<ServiceResponse<LoginResponse>, ServiceError, LoginRequest>({
        mutationFn: service.login
    });
}

export default useMutateLogin;