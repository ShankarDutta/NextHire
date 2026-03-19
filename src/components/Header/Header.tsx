"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthNav from "./AuthNav";
import LandingNav from "./LandingNav";

const Header = () => {
  const path = usePathname();
  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 ${path === "/auth/signup" || path === "/auth/signin" ? "backdrop-blur-md" : "border-b shadow backdrop-blur-lg"}`}
      aria-label="app-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo  */}
        <Link href={"/"}>
          <h1
            className="text-2xl font-semibold"
            aria-label="App Name">
            NextHire
          </h1>
        </Link>

        {/* swith nav Items  */}
        {path === "/auth/signup" || path === "/auth/signin" ?
          <AuthNav />
        : <LandingNav />}
      </div>
    </header>
  );
};

export default Header;
