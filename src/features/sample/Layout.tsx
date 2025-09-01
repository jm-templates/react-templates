import { Outlet } from "react-router";
import Nav from "../../shared/components/Nav";
import { SampleProvicer } from "./context/sample.context";

export default function Layout() {
  return (
    <SampleProvicer>
      <Nav />
      <main>
        <Outlet />
      </main>
    </SampleProvicer>
  );
}
