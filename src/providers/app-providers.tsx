import { DndContext } from "@dnd-kit/core";
import { ReactNode, StrictMode } from "react";
import { SidebarProvider } from "../components/ui/sidebar";

interface ProviderProps {
    children: ReactNode
}

export function AppProviders({ children }: ProviderProps) {
    return (
        <StrictMode>
            <SidebarProvider>
                <DndContext>
                    {children}
                </DndContext>
            </SidebarProvider >
        </StrictMode>
    );
}