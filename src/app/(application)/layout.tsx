import { SidebarProvider } from "@/components/shadcnui/sidebar";
import { CustomLayoutProps } from "@/lib/type";

const ApplicationLayout = ({ children }: CustomLayoutProps) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};

export default ApplicationLayout;
