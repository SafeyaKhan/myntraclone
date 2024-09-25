import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./routes/App.jsx";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import "bootstrap/dist/css/bootstrap.css";
import myntraStore from "./store/index.js";
import { Provider } from "react-redux";
import Address from "./routes/Address.jsx";
import AddressDisplay from "./components/AddressDisplay.jsx";
import Wishlist from "./routes/Wishlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> /*, loader: postLoader }, */ },
      {
        path: "/bag",
        element: <Bag />,
        // action: createPostAction,
      },
      {
        path: "/address",
        element: <Address />,
        // action: createPostAction,
      },
      {
        path: "/addressdisplay",
        element: <AddressDisplay />,
        // action: createPostAction,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
        // action: createPostAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
