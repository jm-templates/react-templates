import { Outlet } from "react-router";
import Nav from "../../shared/components/Nav";
import { SampleProvider } from "./contexts/SampleProvider";


export default function Layout() {

  return (
    <SampleProvider>
      <Nav />
      <main>
        <Outlet />
      </main>
    </SampleProvider>
  );
}
