export interface ITextfieldProps {
    id?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    label?: string;
    className?: string;
    inputContainerClassName?: string;
    inputClassName?: string;
    labelClassName?: string;
    prefixIcon?: TIcon;
    suffixIcon?: TIcon;
    error?: boolean;
    helperText?: string;
    placeholder?: string;
}

type TIcon = {
    icon: React.ReactNode,
    className?: string
}