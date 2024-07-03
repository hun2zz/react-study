import React from "react";
import Home from "./components/RouteExample/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/RouteExample/pages/Products";
import RootLayout from "./components/RouteExample/layout/RootLayout";
import ErrorPage from "./components/RouteExample/pages/ErrorPage";
import ProductDetail from "./components/RouteExample/pages/ProductDetail";
import Events from "./components/RouteExample/pages/Events";
import EventDetail from "./components/RouteExample/pages/EventDetail";
import EventLayout from "./components/RouteExample/layout/EventLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element : <EventLayout></EventLayout>,
        children: [
          { index: true, element: <Events /> },
          { path: ":prodId", element: <EventDetail /> },
        ],
      },
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
