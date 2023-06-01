import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUS from "./Components/Pages/AboutUs";
import Home from "./Components/Pages/Home";
import PageNotFound from "./Components/Pages/PageNotFound";
import HullClean from "./Components/Pages/HullClean";
import ContactUs from "./Components/Pages/ContactUsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aboutus", element: <AboutUS /> },
      { path: "/hullcleaning", element: <HullClean />},
      {path: "/contactus", element: <ContactUs />}
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
