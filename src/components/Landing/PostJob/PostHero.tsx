import { Button } from "@/components/shadcnui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const PostHero = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-4 p-8 text-center">
        <div className="text-4xl md:text-6xl font-bold text-blue-900 ">The Future of Hiring Begins Now</div> 
        <div className="text-xl md:text-3xl font-light  ">Next Hire connects talent with opportunity, making hiring simple, fast, and efficient
            </div> 
           



                <Link href="/auth/signup">
                        <Button
                          variant="outline"
                          className="bg-blue-700  hover:bg-blue-300 dark:bg-white dark:text-black dark:hover:bg-blue-200 w-44 cursor-pointer  text-white flex gap-2 items-center justify-center">
                         Post A Job
                         <MoveRight/>
                        </Button>
                      </Link>
        </section>
    );
}

export default PostHero;