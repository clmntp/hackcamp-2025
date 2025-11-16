import { Calendar, GraduationCap, Ticket } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "@tanstack/react-router";

const items = [
    {
        title: "Events",
        path: "/events",
        icon: Ticket,
    },
    {
        title: "Clubs",
        path: "/clubs",
        icon: GraduationCap,
    },
];

export default function AppSidebar() {
    const pathname = useLocation({
        select: (location) => location.pathname,
    });

    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className="flex p-1 -mb-2">
                            <img className="w-7 h-7 mr-1" src="logo.png"></img>
                            <h2 className="font-semibold text-xl">unify</h2>
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={pathname === item.path}
                                    >
                                        <Link to={item.path}>
                                            <item.icon />
                                            <span className="font-medium">
                                                {item.title}
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}