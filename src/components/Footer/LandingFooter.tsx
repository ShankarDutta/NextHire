"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../shadcnui/separator";

const LandingFooter = () => {
  const path = usePathname();

  return (
    <>
      {path === "/auth/signup" || path === "/auth/signin" ? null : (
        <footer>
          <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 pt-10 sm:grid-cols-2 lg:grid-cols-5">
            {/* Logo */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                aria-label="Next-Hire-Logo">
                <Image
                  src="/app-logo.png"
                  alt="NextHire-Logo"
                  height={100}
                  width={100}
                  className="h-10 w-auto"
                />
              </Link>

              <p className="text-muted-foreground mt-3 max-w-md text-sm">
                NextHire connects talented professionals with the right
                opportunities to grow their careers faster.
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 gap-2">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <Link href="/">Job Seekers</Link>
              <Link href="/post-jobs">Recruiter</Link>
              <Link href="/auth/signin">Signin & Get Hired</Link>
              <Link href="/auth/signup">Create Free Account</Link>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Why NextHire</h4>
              <div className="mt-1.5 grid grid-cols-1 gap-2">
                <Link href="/">Job Seeker Features</Link>
                <Link href="/post-jobs">Recruiter Features</Link>
                <Link href="/auth/signin">Our Network</Link>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Resources</h4>
              <div className="mt-1.5 grid grid-cols-1 gap-2">
                <Link href="/">Help Center</Link>
                <Link href="/post-jobs">About NextHire</Link>
              </div>
            </div>

            <div className="col-span-full">
              <Separator />
            </div>

            {/* Bottom */}
            <div className="col-span-full flex flex-col items-center pb-4 text-center sm:flex-row sm:justify-between sm:text-left">
              <h4>© 2026 NextHire | All Rights Reserved</h4>

              <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
                <Link href="/">Privacy Policy</Link>
                <Link href="/post-jobs">Terms & Condition</Link>
                <Link href="/post-jobs">Terms & Service</Link>
              </div>
            </div>
          </section>
        </footer>
      )}
    </>
  );
};

export default LandingFooter;
