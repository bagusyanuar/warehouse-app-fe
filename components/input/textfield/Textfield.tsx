'use client'

import React, { useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { ITextfieldProps } from './types';
import { LuInfo } from 'react-icons/lu';


const Textfield: React.FC<ITextfieldProps> = ({
    id,
    value,
    onChange,
    onBlur,
    label,
    className,
    inputContainerClassName = '',
    inputClassName = '',
    labelClassName = '',
    prefixIcon,
    suffixIcon,
    error = false,
    helperText,
    placeholder
}) => {
    const textfieldId = `textfield-${useId()}`;
    return (
        <div className={twMerge("group w-full", className)}>
            <label htmlFor={id || textfieldId} className={twMerge("text-neutral-500 mb-0.5 text-sm group-focus-within:text-neutral-600", labelClassName)}>{label}</label>
            <div className={twMerge(
                "flex rounded-sm border  text-sm transition-all duration-200 ease-in",
                error ? "border-rose-500 group-focus-within:border-rose-600" : "border-neutral-500 group-focus-within:border-neutral-600",
                inputContainerClassName
            )}>
                {prefixIcon && <div className="px-2.5 flex items-center justify-center">{prefixIcon.icon}</div>}
                <input
                    id={id || textfieldId}
                    type="text"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    className={twMerge(
                        "w-full py-2.5 text-neutral-500 outline-0 focus:outline-0 focus:text-neutral-600",
                        prefixIcon ? "ps-0" : "ps-2.5",
                        inputClassName
                    )}
                />
                {suffixIcon && <div className={twMerge(
                    "flex items-center justify-center",
                    error ? "ps-2.5 pe-0" : "ps-2.5 pe-2.5"
                )}>
                    {suffixIcon.icon}
                </div>}
                {error && <div className={twMerge(
                    "flex items-center justify-center",
                    suffixIcon ? "pe-2.5 ps-1.5" : "ps-2.5 pe-2.5"
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

export default Textfield