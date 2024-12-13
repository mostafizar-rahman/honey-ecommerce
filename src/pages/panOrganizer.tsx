import HeaderSearch from "@/components/sections/headers/headerSearch"
import HeroPanOrganizer from "@/components/sections/heros/heroPanOrganizer"

const PanOrganizer = () => {
  return (
    <main className="bg-background">
      <HeaderSearch
        btnStyle="bg-muted"
        inputStyle="placeholder:text-muted-foreground border-muted"
      />
      <HeroPanOrganizer />
    </main>
  )
}

export default PanOrganizer