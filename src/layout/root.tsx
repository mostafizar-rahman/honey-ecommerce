import { Outlet, useLocation } from 'react-router-dom'
import Header from "@/components/sections/headers/header"
import Footer from "@/components/sections/footer"
import { useEffect } from 'react';
import { useState } from "react";

const RootLayout = () => {
    
    const pathname = useLocation().pathname
    const [language, setLanguage] = useState<string>("English");
    

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
         
      <Header language={language} setLanguage={setLanguage} />
            <Outlet />
           <Footer language={language} />
        </div>
    )
}

export default RootLayout