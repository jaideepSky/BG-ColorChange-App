
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Layout from "./Layout.jsx";
import { StrictMode } from "react";
import './App.css';
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
        
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "user/:userId",
        element: <User />,
      },
      {
        path : "github",
        element: <Github/>,
        loader: githubInfoLoader, // This loader fetches data before rendering the component
        
      }

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
