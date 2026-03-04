import { Link } from "react-router-dom";
import { Sandwich } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";
import { Calendar, Home, LayoutDashboard } from "lucide-react";

export function NavigationMenuDemo() {
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                <NavigationMenuItem >
                    <NavigationMenuTrigger className="bg-background " >
                        <Sandwich size={20} color="gray" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="border-gray-300 bg-background rounded-xl -left-13 min-w-30" >
                        <NavigationMenuLink asChild>
                            <Link
                                to="/dashboard"
                                className="flex flex-row w-full items-center gap-2 px-2 py-1.5"
                            >
                                <LayoutDashboard size={16} />
                                <span className="text-gray-600">Dashboard</span>
                            </Link>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                            <Link
                                to="/"
                                className="flex flex-row w-full items-center gap-2 px-2 py-1.5"
                            >
                                <Home size={16} />
                                <span className="text-gray-600">Home</span>
                            </Link>
                        </NavigationMenuLink>

                        <NavigationMenuLink asChild>
                            <Link
                                to="/calendar"
                                className="flex flex-row w-full items-center gap-2 px-2 py-1.5"
                            >
                                <Calendar size={16} />
                                <span className="text-gray-600">Calendar</span>
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}