import "./index.css";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"; // Correct import statement
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
// import Cart from "./components/Cart";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer/Shimmer";

const Cart = lazy(() => import("./components/Cart"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/food-delivery",
        element: <Body />,
      },
      {
        path: "/food-delivery/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/food-delivery/contactus",
        element: <ContactUs />,
      },
      {
        path: "/food-delivery/cart",
        element: (
          <Suspense fallback={<Shimmer></Shimmer>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/food-delivery/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
