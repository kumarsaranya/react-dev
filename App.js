import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/HeaderComponent";
import SearchComponent from "./src/SearchComponent";
import FilterComponent from "./src/FilterComponent";
import RestaurantContainer from "./src/RestaurantContainer";
import FooterComponent from "./src/FooterComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import AboutComponent from "./src/AboutComponent";
import ContactComponent from "./src/ContactComponent";
import CartComponent from "./src/CartComponent";
import ErrorComponent from "./src/ErrorComponent";
import RestaurantMenu from "./src/RestaurantMenu";

const reactJSX = <h1 className="heading"> Heading1 from JSX</h1>;

const AppComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <RestaurantContainer />,
      },
      {
        path: "/about",
        element: <AboutComponent />,
      },
      ,
      {
        path: "/cart",
        element: <CartComponent />,
      },
      {
        path: "/contact",
        element: <ContactComponent />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
  {
    path: "/about",
    element: <AboutComponent />,
  },
  {
    path: "/contact",
    element: <ContactComponent />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
