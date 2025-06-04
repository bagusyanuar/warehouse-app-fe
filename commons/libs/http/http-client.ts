import axios from "axios";

export type ServiceResponse<T> = {
    code: number;
    success: boolean;
    data?: T;
    message?: string;
}

export type ServiceError = {
    message: string;
    code: number;
    errors?: Record<string, string[]>;
}

export function serviceError(error: unknown): ServiceError {
    if (axios.isAxiosError(error)) {
        const response = error.response?.data;
        return {
            message: response?.message || error.message || 'axios error',
            code: error.response?.status || 500,
            errors: response?.errors || undefined
        }
    }

    if (error instanceof Error) {
        return {
            message: error.message,
            code: 500,
        }
    }

    return {
        message: "unknown error occured",
        code: 500
    }
}