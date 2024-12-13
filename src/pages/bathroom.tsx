import HeaderSearch from "@/components/sections/headers/headerSearch"
import HeroBathroom from "@/components/sections/heros/heroBathroom"

const Bathroom = () => {
    return (
        <main className="bg-background">
            <HeaderSearch
                btnStyle="bg-muted"
                inputStyle="placeholder:text-muted-foreground border-muted"
            />
            <HeroBathroom />
        </main>
    )
}

export default Bathroom