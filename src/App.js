import React from "react";
import Home from "./components/RouteExample/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/RouteExample/pages/Products";
import RootLayout from "./components/RouteExample/layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
