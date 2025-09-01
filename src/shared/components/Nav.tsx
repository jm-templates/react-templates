import { NavLink } from "react-router";

export default function Nav() {
  return (
    <nav className="flex flex-col bg-[#373737] py-10 px-2 gap-1">
      <NavLink
        to="/"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isActive ? "active" : "",
            isPending ? "pending" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ") + "button"
        }
      >
        Welcome
      </NavLink>
      <NavLink to="guest" className={"button"}>
        Greeting
      </NavLink>
    </nav>
  );
}
