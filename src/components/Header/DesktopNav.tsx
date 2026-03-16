"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";
import { Button } from "../shadcnui/button";
import { Separator } from "../shadcnui/separator";

const DesktopNav = () => {
  const path = usePathname();

  return (
    <>
      {/* Candidate landing page link  */}
      <Link
        href="/"
        className={`hover:text-blue-500 dark:hover:text-blue-300 ${
          path === "/" ? "text-blue-500 dark:text-blue-300" : ""
        }`}>
        Find Jobs
      </Link>

      {/* post job landing page link  */}
      <Link
        href={"/post-jobs"}
        className={`hover:text-blue-500 dark:hover:text-blue-300 ${
          path === "/post-jobs" ? "text-blue-500 dark:text-blue-300" : ""
        }`}>
        Recruiter/Post Jobs
      </Link>

      {/* theme changer button  */}
      <Separator orientation="vertical" />
      <ThemeToggleButton />
      <Separator orientation="vertical" />

      {/* sign in link  */}
      <Link
        href={"/auth/signin"}
        className="hover:text-blue-500 dark:hover:text-blue-300">
        Sign in
      </Link>

      {/* sign up button  */}
      <Link href="/auth/signup">
        <Button
          variant="outline"
          className="hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400">
          Sign up
        </Button>
      </Link>
    </>
  );
};

export default DesktopNav;
