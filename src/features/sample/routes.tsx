import Greeting from "./components/Greeting";
import Welcome from "./components/Welcome";
import Layout from "./Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        Component: Welcome,
      },
      {
        path: "/:name",
        Component: Greeting,
      },
    ],
  },
];
export default routes;
