import Link from "next/link";
import DesktopNav from "./DesktopNav";

const Header = () => {
  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 border-b shadow"
      aria-label="app-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href={"/"}>
          <h1
            className="text-2xl font-semibold"
            aria-label="App Name">
            NextHire
          </h1>
        </Link>

        <nav
          className="hidden md:flex md:items-center md:gap-4"
          aria-label="Nav-Items">
          <DesktopNav />
        </nav>
      </div>
    </header>
  );
};

export default Header;
