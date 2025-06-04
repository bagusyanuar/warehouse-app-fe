import { serviceError, ServiceResponse } from "@/commons/libs/http/http-client";
import LoginInterface from "@/interfaces/LoginInterface";
import { TLoginResponse } from "@/models/authentication";
import { TLoginSchema } from "@/schemas/authentication";

class LoginService implements LoginInterface {

    async login(schema: TLoginSchema): Promise<ServiceResponse<TLoginResponse>> {
        try {
            console.log(schema);
            await new Promise(resolve => setTimeout(resolve, 1500));
            return {
                code: 200,
                success: true,
                data: {
                    accessToken: "access token",
                    refreshToken: "refrest token"
                },
            }
        } catch (e: unknown) {
            throw serviceError(e);
        }


    }

}

export default LoginService;