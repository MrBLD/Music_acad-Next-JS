"use client";
import Link from "next/link"
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";


function HeroSection() {
    return (
        <div
            className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <div className="p-4 relativez-10 w-full text-center">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <h1 className="text-3xl md:text-5xl md:leading-tight font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 mt-20">Enlighten Your Lens: Master Light Photography</h1>
                <p className="text-xl mt-4 font-normal md:text-lg text-neutral-300 max-w-lg mx-auto">Unveil the secrets of light and shadow in our captivating photography course, where every click ignites a world of visual storytelling. Join us to capture moments that shimmer with brilliance, and let your imagination dance in the luminous artistry of photography.</p>
                <div className="mt-4">
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        Explore
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection