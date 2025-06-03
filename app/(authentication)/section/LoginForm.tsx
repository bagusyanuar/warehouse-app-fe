'use client'

import React from 'react';
import { Button } from "@/components/button";
import { Passwordfield } from "@/components/input/passwordfield";
import { Textfield } from "@/components/input/textfield";
import { LuMail } from 'react-icons/lu';
import { Controller } from 'react-hook-form'
import { useLoginForm } from '../hooks'

const LoginForm = () => {
    const hook = useLoginForm();
    return (
        <div className="w-full">
            <Controller
                control={hook.control}
                name="email"
                render={({ field }) => (
                    <Textfield
                        {...field}
                        className="mb-3"
                        prefixIcon={{
                            icon: <LuMail size={16} className="text-neutral-500 group-focus-within:text-neutral-600 transition-all duration-200 ease-in" />
                        }}
                        placeholder="email"
                        error={!!hook.errors.email}
                        helperText={hook.errors.email?.message}
                    />
                )}
            />
            <Controller
                control={hook.control}
                name="password"
                render={({ field }) => (
                    <Passwordfield
                        {...field}
                        placeholder="password"
                        className="mb-5"
                        error={!!hook.errors.password}
                        helperText={hook.errors.password?.message}
                    />
                )}
            />
            <Button
                onClick={hook.handleSubmit(hook.onSubmit)}
                loading={hook.loading}
            >
                <span className="">Sign In</span>
            </Button>
        </div>
    )
}

export default LoginForm