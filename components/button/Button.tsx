'use client'

import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IButtonProps } from './types';

const Button: React.FC<IButtonProps> = ({
    children,
    onClick,
    loading,
    className
}) => {
    return (
        <button
            onClick={onClick}
            className={twMerge(
                "flex justify-center items-center py-2.5 rounded-sm text-sm cursor-pointer w-full text-white bg-rose-500 border border-rose-500 hover:bg-rose-600 hover:border-rose-600 transition-all duration-200 ease-in",
                className
            )}
        >
            {loading ? <span>Loading...</span> : children}
        </button>
    )
}

export default Button