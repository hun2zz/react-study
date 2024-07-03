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
        element: <EventLayout></EventLayout>,
        children: [
          {
            index: true,
            element: <Events />,

            //이페이지가 열릴 때 자동으로 트리거되어 호출되는 함수
            //이 함수에는 페이지가 열리자마자 해야할 일을 적을 수 있음.
            loader: async () => {
              const response = await fetch("http://localhost:8282/events");
              const jsonDAta = await response.json();

              //로더가 리턴한 데이터는 loader를 선언한 컴포넌트와 그 하위 컴포넌트에서
              //언제든 불러서 사용 가능
              return jsonDAta;
            },
          },
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
