import Image from "next/image";
import { Separator } from "../shadcnui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../shadcnui/sidebar";
import GetSidebarMenu from "./GetSidebarMenu";

const AppSidebar = () => {
  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size={"lg"}
              className="cursor-default">
              <Image
                src="/d-l.png"
                alt="next-hire"
                width={32}
                height={32}
              />

              <span className="text-3xl">NextHire</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <Separator />
      </SidebarHeader>

      <SidebarContent>
        {/* Role specific sidebar content based on authenticated session */}
        <GetSidebarMenu />
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
