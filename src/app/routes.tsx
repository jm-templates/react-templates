/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router";
import App from "./App";
import Error from "./Error";
const SampleRoutes = () =>
  import("../features/sample/routes").then((m) => m.default);

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    ErrorBoundary: Error,
    children: [...(await SampleRoutes())],
  },
]);

export default router;
