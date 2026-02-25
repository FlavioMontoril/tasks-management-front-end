import type { ButtonHTMLAttributes, ReactNode } from "react";


const buttonVariants = {
    default: "bg-gray-500",
    primary: "bg-purple-500",
    secondary: "bg-green-500"
} as const

type ButtonVariantsProps = keyof typeof buttonVariants;
type ButtonProps = {
    children: ReactNode,
    variant?: ButtonVariantsProps,
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, variant = "default", className, ...rest }: ButtonProps) => {
    return (
        <button className={`
        px-3 py-2 rounded-xl text-white
        ${buttonVariants[variant]}
        ${className ?? ""}
        `}
            {...rest}
        >
            {children}
        </button>
    )
}