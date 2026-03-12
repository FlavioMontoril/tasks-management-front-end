import {
    ChevronRight,
    ChevronsUpDown,
    Command,
    Home,
    LayoutDashboard,
    LogOut,
    PanelsTopLeft,
    Settings,
} from "lucide-react"
import { Link } from "react-router-dom"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "../components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Separator } from "../components/ui/separator"
import { useIsMobile } from "../hooks/use-mobile"

export function AppSidebar() {

    const isMobile = useIsMobile()
    return (
        <Sidebar
            collapsible={isMobile ? "offcanvas":"icon"}
        //  collapsible="icon"
        >

            {/* ===== HEADER ===== */}
            <SidebarContent className="bg-gray-900 ">
                <SidebarHeader>
                    <div className="flex items-center gap-3 px-2 py-2">
                        <div className="h-8 w-8 rounded bg-foreground flex items-center justify-center">
                            <Command color="white" size={20} />
                        </div>
                        <div className="flex flex-col text-sm">
                            <span className="font-semibold text-muted">Tasks Management</span>
                            <span className="text-xs text-muted-foreground">Personal</span>
                        </div>
                    </div>
                </SidebarHeader>
                <div className="w-60 mx-auto">
                    <Separator className="bg-muted-foreground" />
                </div>

                {/* ===== SIDEBAR MENU ===== */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-muted">Platform</SidebarGroupLabel>

                    {/* Home */}
                    <SidebarMenu className="text-muted">
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link to="/home">
                                    <Home />
                                    Home
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>

                    <SidebarMenu className="text-muted">
                        {/* Dashboard */}
                        <SidebarMenuItem >
                            <SidebarMenuButton asChild>
                                <Link to="/dashboard">
                                    <LayoutDashboard />
                                    Dashboard
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        {/* Playground com submenu */}
                        <Collapsible defaultOpen>
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton>
                                        <PanelsTopLeft />
                                        Paineis
                                        <ChevronRight className="ml-auto" />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>

                                <CollapsibleContent >
                                    <SidebarMenuSub>
                                        <SidebarMenuSubItem >
                                            <SidebarMenuSubButton className="text-muted" asChild>
                                                <Link to="/calendar">Calendar</Link>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                        <SidebarMenuSubItem>
                                            <SidebarMenuSubButton className="text-muted" asChild>
                                                <Link to="/table">Tabela</Link>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                        <SidebarMenuSubItem>
                                            <SidebarMenuSubButton className="text-muted" asChild>
                                                <Link to="/starred">Acordion</Link>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>

                        {/* Documentation */}
                        {/* <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link to="/docs">
                                    <BookOpen />
                                    Documentation
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem> */}
                    </SidebarMenu>
                </SidebarGroup>

            </SidebarContent>

            {/* ===== FOOTER ===== */}
            <SidebarFooter className="bg-gray-900">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton size="lg" className="gap-3 ">
                                    <Avatar className="h-8 w-8 rounded-lg bg-muted-foreground">
                                        <AvatarImage src="/portfolio.png" />
                                        <AvatarFallback>FM</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col text-left text-sm leading-tight ">
                                        <span className="font-medium text-muted-foreground">Flávio Montoril</span>
                                        <span className="text-xs text-muted-foreground">
                                            montoril@outlook.com
                                        </span>
                                    </div>
                                    <ChevronsUpDown className="ml-auto size-4 text-muted-foreground" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent side="top" align="end" className="w-[--radix-popper-anchor-width]">
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>

        </Sidebar>
    )
}