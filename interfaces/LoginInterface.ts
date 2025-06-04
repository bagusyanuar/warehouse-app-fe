import { ServiceResponse } from "@/commons/libs/http/http-client";
import { TLoginResponse } from "@/models/authentication";
import { TLoginSchema } from "@/schemas/authentication";

interface LoginInterface {
    login(schema: TLoginSchema): Promise<ServiceResponse<TLoginResponse>>;
}

export default LoginInterface;