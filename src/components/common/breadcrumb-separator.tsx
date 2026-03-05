
import { DotIcon } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";

export function BreadcrumbSeparatorDemo() {

    const { pathname } = useLocation();

    const isActive = (path: string) => pathname === path;

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/home" className={isActive("/home") ? "text-white font-semibold" : "text-muted-foreground"}>
                            Home
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <DotIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/dashboard" className={isActive("/dashboard") ? "text-white font-semibold" : "text-muted-foreground"}>
                            Dashboard
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <DotIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/calendar" className={isActive("/calendar") ? "text-white font-semibold" : "text-muted-foreground"}>
                            Calendar
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
