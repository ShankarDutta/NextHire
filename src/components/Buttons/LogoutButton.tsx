"use client";

import { Loader2Icon, LogOutIcon } from "lucide-react";
import { useTransition } from "react";
import { Button } from "../shadcnui/button";

const LogoutButton = () => {
  const [isPending, startTransition] = useTransition();
  const logoutHandler = () => {
    console.log("LogOut Form Account");
  };

  return (
    <Button
      onClick={() => startTransition(logoutHandler)}
      disabled={isPending}
      variant={"destructive"}
      className="w-full">
      {isPending ?
        <>
          <Loader2Icon className="animate-spin" /> Logging out
        </>
      : <>
          <LogOutIcon /> Logout
        </>
      }
    </Button>
  );
};

export default LogoutButton;
