import { RouterProvider } from "react-router-dom"
import { router } from "@/route/router"
import "./i18n";
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App