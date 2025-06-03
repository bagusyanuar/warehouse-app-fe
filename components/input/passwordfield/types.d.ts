export interface IPasswordfieldProps {
    id?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    label?: string;
    className?: string;
    inputContainerClassName?: string;
    inputClassName?: string;
    labelClassName?: string;
    error?: boolean;
    helperText?: string;
    placeholder?: string;
}
