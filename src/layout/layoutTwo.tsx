import Footer from "@/components/sections/footer"
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom"

const LayoutTwo = () => {
    const pathname = useLocation().pathname
    useEffect(() => {
        const body = document.querySelector("body");
        const className = pathname === "/" ? "home" : pathname.slice(1).replace("/", "-");

        if (body) {
            body.className = "";
            body.classList.add(className);
        }
    }, [pathname]);
    
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}

export default LayoutTwo