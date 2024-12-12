import Footer from "@/components/sections/footer"
import { Outlet } from "react-router-dom"

const LayoutTwo = () => {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}

export default LayoutTwo