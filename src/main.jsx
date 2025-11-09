import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ShopNow from "./Pages/Shop/ShopNow";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      { index: true, element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/Shop", element: <ShopNow></ShopNow> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/contact", element: <Contact></Contact>},
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
