import type { ElementType } from "react";
import { Link } from "react-router-dom";

export interface SideLinkProps {
    to: string;
    text: string;
    icon: ElementType;
}
export const SideLink = ({ to, text, icon: Icon }: SideLinkProps) => {
    return (
        <Link
            className="block py-2 px-4 rounded transition duration-200 hover:text-white hover:bg-gray-700"
            to={to}>
            <Icon className="inline-block mr-2" size={20} />
            <span>{text}</span>
        </Link>
    )
}