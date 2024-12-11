import Header from "@/components/sections/headers/header"
import Prifing from "@/components/sections/pricing"
import Ads from "./components/sections/ads"
import Partners from "./components/sections/partners"
import ProductsCategory from "./components/sections/productsCategory"
import LatestProducts from "./components/sections/latestProducts"


const App = () => {
  return (
    <>
      <Header />
      <main className="bg-background">
        <Prifing />
        <Ads />
        <Partners />
        <ProductsCategory />
        <LatestProducts/>
      </main>
    </>
  )
}

export default App