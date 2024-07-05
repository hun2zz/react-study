import React from "react";
import Home from "./components/RouteExample/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/RouteExample/pages/Products";
import RootLayout from "./components/RouteExample/layout/RootLayout";
import ErrorPage from "./components/RouteExample/pages/ErrorPage";
import Events, {
  loader as eventListLoader,
} from "./components/RouteExample/pages/Events";
import EventDetail, {
  loader as eventDetailLoader,
  action as deleteAction,
} from "./components/RouteExample/pages/EventDetail";
import EventLayout from "./components/RouteExample/layout/EventLayout";
import NewEvent from "./components/RouteExample/pages/NewEvent";
import EditPage from "./components/RouteExample/pages/EditPage";
import { action as saveAction } from "./components/RouteExample/components/EventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventLayout></EventLayout>,
        children: [
          {
            index: true,
            element: <Events />,

            //이페이지가 열릴 때 자동으로 트리거되어 호출되는 함수
            //이 함수에는 페이지가 열리자마자 해야할 일을 적을 수 있음.
            // loader: eventListLoader,
          },
          {
            path: ":prodId",

            loader: eventDetailLoader,
            id: "event-detail",
            children: [
              { index: true, element: <EventDetail />, action: deleteAction },
              { path: "edit", element: <EditPage />, action: saveAction },
            ],
          },
          { path: "new", element: <NewEvent />, action: saveAction },
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
