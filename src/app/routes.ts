import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Decouvrir from "./pages/Decouvrir";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "decouvrir", Component: Decouvrir },
    ],
  },
]);
