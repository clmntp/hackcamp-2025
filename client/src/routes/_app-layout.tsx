import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import { Outlet, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/_app-layout')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <Outlet />
        </SidebarProvider>
    );
}
