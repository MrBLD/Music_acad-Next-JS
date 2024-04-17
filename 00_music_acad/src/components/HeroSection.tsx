import Link from "next/link"
import { Spotlight } from "./ui/Spotlight";

function HeroSection() {
    return (
        <div
            className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <div className="p-4 relativez-10 w-full text-center">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <h1>Master the art of music</h1>
                <p> Dive into............</p>
                <div className="mt-4">
                    <Link href={"/courses"}>
                        Explore Courses
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection