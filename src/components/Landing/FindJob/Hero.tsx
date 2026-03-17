import { Button } from "@/components/shadcnui/button";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="flex flex-col items-center gap-4 p-8 text-center">
        <div className="text-4xl md:text-6xl font-bold text-blue-900 ">Where Talent Meets Opportunity</div> 
        <div className="text-xl md:text-3xl font-light ">Explore opportunities, showcase your skills, and get hired faster
            </div> 
           



                <Link href="/auth/signup">
                        <Button
                          variant="outline"
                          className="bg-blue-700  hover:bg-blue-300 dark:bg-white dark:text-black dark:hover:bg-blue-200 w-44 cursor-pointer  text-white">
                          Get Hired
                        </Button>
                      </Link>
        </section>
    );
}

export default Hero;