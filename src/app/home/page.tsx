"use client"

import Banner from "@/components/homepage/Banner";
import About from "@/components/homepage/About";
import Location from "@/components/homepage/Location";
import Games from "@/components/homepage/Games";

export default function HomePage() {
    return (
        <>
            <Banner />
            <Games />
            <About />
            <Location />
        </>
    );
}
