import React from "react"
import Homepage from "../pages/Homepage"
import About from "../pages/About"
import Contact from "../pages/Contact";

interface RouteElement {
    path: string
    element: React.JSX.Element
    title: string
}

//export const routes: RouteElement[] = [] (Pablo nie poleca)

export const routes: Array<RouteElement> = [
    {
        path: "/",
        element: <Homepage/>,
        title: "Homepage"
    },
    {
        path: "/about",
        element: <About/>,
        title: "About Us"
    },
    {
        path: "/contact",
        element: <Contact/>,
        title: "Contact"
    }
]