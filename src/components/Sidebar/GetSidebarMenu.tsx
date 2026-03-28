"use client";

import { usePathname } from "next/navigation";

const GetSidebarMenu = () => {
  const path = usePathname();

  switch (path) {
    case "/candidate":
      return (
        <div className="text-muted-foreground p-4 text-sm">Job Seeker Menu</div>
      );

    case "/recruiter":
      return (
        <div className="text-muted-foreground p-4 text-sm">recruiter Menu</div>
      );

    case "/admin":
      return (
        <div className="text-muted-foreground p-4 text-sm">Admin Menu</div>
      );
  }
};

export default GetSidebarMenu;
