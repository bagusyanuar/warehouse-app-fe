'use client'

import React, { useId, useState, HTMLInputTypeAttribute } from 'react';
import { twMerge } from 'tailwind-merge';
import { IPasswordfieldProps } from './types';
import { HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { LuInfo } from 'react-icons/lu';

const Passwordfield: React.FC<IPasswordfieldProps> = ({
    id,
    value,
    onChange,
    onBlur,
    label,
    className,
    inputContainerClassName = '',
    inputClassName = '',
    labelClassName = '',
    error = false,
    helperText,
    placeholder
}) => {
    const passwordfieldId = `password-field-${useId()}`;
    const [type, setType] = useState<HTMLInputTypeAttribute>('password')

    const handleChangeType = () => {
        if (type === 'text') {
            setType('password')
        }

        if (type === 'password') {
            setType('text')
        }
    }
    return (
        <div className={twMerge("group w-full", className)}>
            <label htmlFor={id || passwordfieldId} className={twMerge("text-neutral-500 mb-0.5 text-sm group-focus-within:text-neutral-600", labelClassName)}>{label}</label>
            <div className={twMerge(
                "flex rounded-sm border text-sm transition-all duration-200 ease-in",
                error ? "border-rose-500 group-focus-within:border-rose-600" : "border-neutral-500 group-focus-within:border-neutral-600",
                inputContainerClassName
            )}>
                <div className="px-2.5 flex items-center justify-center">
                    <HiOutlineLockClosed size={16} className="text-neutral-500 group-focus-within:text-neutral-600 transition-all duration-200 ease-in" />
                </div>
                <input
                    id={id || passwordfieldId}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    className={twMerge(
                        "w-full py-2.5 text-neutral-500 outline-0 focus:outline-0 focus:text-neutral-600",
                        inputClassName
                    )}
                />
                <div
                    className={twMerge(
                        "flex items-center justify-center cursor-pointer",
                        error ? "ps-2.5 pe-0" : "ps-2.5 pe-2.5"
                    )}
                    onClick={handleChangeType}
                >
                    {type === 'text' ? <HiOutlineEyeSlash
                        size={16}
                        className="text-neutral-500 group-focus-within:text-neutral-600 transition-all duration-200 ease-in"
                    /> : <HiOutlineEye
                        size={16}
                        className="text-neutral-500 group-focus-within:text-neutral-600 transition-all duration-200 ease-in"
                    />}
                </div>
                {error && <div className={twMerge(
                    "pe-2.5 ps-1.5 flex items-center justify-center"
                )}>
                    <LuInfo size={16} className="text-rose-500 group-focus-within:text-rose-600 transition-all duration-200 ease-in" />
                </div>}
            </div>
            {helperText && <span
                className={twMerge(
                    "text-xs block mt-0.5",
                    error ? "text-rose-500" : "text-neutral-500"
                )}
            >
                {helperText}
            </span>}
        </div>
    )
}

export default Passwordfield