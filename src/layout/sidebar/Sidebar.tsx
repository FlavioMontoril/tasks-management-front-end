import { Calendar, Home, LayoutDashboard } from "lucide-react";
import type { ElementType } from "react";
import { SideLink } from "./SideLink";

interface SideOptions {
    id: string;
    to: string;
    icon: ElementType;
    text: string;
}
export const SideBar = () => {

    const sideOptions: SideOptions[] = [
        { id: "home", to: "/", icon: Home, text: "Home" },
        { id: "dashboard", to: "/dashboard", icon: LayoutDashboard, text: "Dashboard" },
        { id: "calendar", to: "/calendar", icon: Calendar, text: "Calendar" },

    ]
    return (
        <div className="bg-gray-800 text-white w-64 py-7 px-1 h-screen">
            <nav>
                {
                    sideOptions.map((option) => {
                        return (
                            <SideLink
                                key={option.id}
                                to={option.to}
                                icon={option.icon}
                                text={option.text}
                            />
                        )
                    })
                }
            </nav>
        </div>
    )
}