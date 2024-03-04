import React from "react"
import Homepage from "../pages/Homepage"
import About from "../pages/About"
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";

interface RouteItem {
  path: string
  name: string
  element: React.JSX.Element
  hideInMenu?: boolean
}

// export const routes: RouteItem[]

export const routes: Array<RouteItem> = [
  {
    path: "/",
    name: "Homepage",
    element: <Homepage />,
  },
  {
    path: "/about",
    name: "About",
    element: <About />,
  },
  {
    path: '/blog',
    name: 'Blog',
    element: <Blog />,
  },
  {
    path: '/blog/post/:id',
    name: 'BlogPost',
    element: <BlogPost />,
    hideInMenu: true
  }
]