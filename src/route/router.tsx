import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layout/root";
import Home from "@/pages/home";
import Tshirt from "@/pages/t-shirt";
import Bathroom from "@/pages/bathroom";
import Shoes from "@/pages/shoes";
import PanOrganizer from "@/pages/panOrganizer";
import Doors from "@/pages/doors";
import Electric from "@/pages/electric";
import Honey from "@/pages/honey";
import LayoutTwo from "@/layout/layoutTwo";
import ProductView from "@/pages/product-view";
import LayoutThree from "@/layout/layoutThree";
import CheckoutForm from "@/pages/checkout";
import AboutUs from "@/pages/about";
import ContactUs from "@/pages/contact";
import Login from "@/pages/auth/Login";


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
                path: "/electric",
                element: <Electric />
            },
            {
                path: "checkout",
                element: <CheckoutForm />
            },
            {
                path: "aboutus",
                element: <AboutUs />
            },
            {
                path: "contact",
                element: <ContactUs />
            },
            {
                path: "login",
                element: <Login />
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
    {
        path: "/",
        element: <LayoutThree />,
        children: [
            {
                path: "/product-view",
                element: <ProductView />
            },
        ]
    },
])