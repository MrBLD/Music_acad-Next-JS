'use client'; // to make it client component as react hooks only run on client side
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Portfolio">
                    <div className="flex  flex-col space-y-4 text-sm">
                        <HoveredLink href={'/'}>
                            Potraits
                        </HoveredLink>
                        <HoveredLink href={'/'}>
                            Landscapes
                        </HoveredLink>
                        <HoveredLink href={'/'}>
                            Events
                        </HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
                <MenuItem setActive={setActive} active={active} item="Albums"></MenuItem>
                <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
                <MenuItem setActive={setActive} active={active} item="FB"></MenuItem>
                <MenuItem setActive={setActive} active={active} item="Insta"></MenuItem>
            </Menu>
        </div>
    )
}

export default Navbar;