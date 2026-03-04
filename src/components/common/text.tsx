import type { ElementType, HTMLAttributes, ReactNode } from "react"

const textVariants = {
    default: "text-xl",
    muted: "text-muted",
    heading: "text-2xl",
    blast: "text-3xl",
    giant: "text-5xl",
} as const;

type TextVariants = keyof typeof textVariants;

type TextProps = {
    children: ReactNode,
    variant?: TextVariants,
    as?: ElementType,
} & HTMLAttributes<HTMLElement>;

export const Text = ({ as: Component = "span", children, variant = "default", className, ...rest }: TextProps) => {
    return (
        <Component
            className={`
            ${textVariants[variant]}${className ?? ""}
            `}
            {...rest}
        >
            {children}
        </Component>
    )
}