import Footer from "@/components/sections/footer"
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom"

const LayoutTwo = () => {
    const pathname = useLocation().pathname
    const language = "English"; // Define the language variable

    useEffect(() => {
        const body = document.querySelector("body");
        const className = pathname === "/" ? "home" : pathname.slice(1).replace("/", "-");

        if (body) {
            body.className = "";
            body.classList.add(className);
        }
    }, [pathname]);

    return (
        <div className='max-w-[1440px] mx-auto'>
            <Outlet />
            <Footer language={language} />
        </div>
    )
}

export default LayoutTwo