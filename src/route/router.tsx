import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layout/root";
import Home from "@/pages/home";
import Tshirt from "@/pages/t-shirt";
import Bathroom from "@/pages/bathroom";
import Shoes from "@/pages/shoes";
import PanOrganizer from "@/pages/panOrganizer";
import Doors from "@/pages/doors";
import Vacuum from "@/pages/vacuum";
import Honey from "@/pages/honey";
import LayoutTwo from "@/layout/layoutTwo";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/t-shirt",
                element: <Tshirt />
            },
            {
                path: "/bathroom",
                element: <Bathroom />
            },
            {
                path: "/shoes",
                element: <Shoes />
            },
            {
                path: "/pan-organizer",
                element: <PanOrganizer />
            },
            {
                path: "/doors",
                element: <Doors />
            },
            {
                path: "/vacuum",
                element: <Vacuum />
            },
        ],
    },
    {
        path: "/",
        element: <LayoutTwo />,
        children: [
            {
                path: "/honey",
                element: <Honey />
            },
        ]
    },
])