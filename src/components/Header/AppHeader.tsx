import ThemeToggleButton from "../Buttons/ThemeToggleButton";
import { Input } from "../shadcnui/input";
import { Separator } from "../shadcnui/separator";
import AppSidebarTrigger from "../Sidebar/AppSidebarTrigger";
import AvtarMenu from "./AvtarMenu";

const AppHeader = () => {
  return (
    <header className="flex items-center justify-between border-b p-4 shadow">
      <AppSidebarTrigger />

      <nav className="flex items-center gap-4">
        <Input placeholder="Search Jobs...." />
        <Separator orientation="vertical" />
        <ThemeToggleButton />
        <Separator orientation="vertical" />
        <AvtarMenu />
      </nav>
    </header>
  );
};

export default AppHeader;
