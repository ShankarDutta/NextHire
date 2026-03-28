import AppHeader from "@/components/Header/AppHeader";
import { SidebarInset } from "@/components/shadcnui/sidebar";
import AppSidebar from "@/components/Sidebar/AppSidebar";
import { CustomLayoutProps } from "@/lib/type";

const RecruiterLayout = ({ children }: CustomLayoutProps) => {
  return (
    <>
      <AppSidebar />

      <SidebarInset>
        <AppHeader />

        {children}
      </SidebarInset>
    </>
  );
};

export default RecruiterLayout;
