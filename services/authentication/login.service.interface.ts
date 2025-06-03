import { ServiceResponse } from "@/commons/libs/http/http-client";
import { TLoginResponse } from "@/models/authentication";
import { TLoginSchema } from "@/schemas/authentication";

interface LoginServiceInterface {
    login(schema: TLoginSchema): Promise<ServiceResponse<TLoginResponse | null>>;
}

export default LoginServiceInterface;