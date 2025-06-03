import { ServiceResponse } from "@/commons/libs/http/http-client";
import { TLoginResponse } from "@/models/authentication";
import { TLoginSchema } from "@/schemas/authentication";
import LoginServiceInterface from "./login.service.interface";

class LoginService implements LoginServiceInterface {
    async login(schema: TLoginSchema): Promise<ServiceResponse<TLoginResponse>> {
        console.log(schema);
        await new Promise(resolve => setTimeout(resolve, 1500));
        return {
            success: true,
            data: {
                accessToken: "access token",
                refreshToken: "refrest token"
            },
        }
    }
}

export default LoginService;