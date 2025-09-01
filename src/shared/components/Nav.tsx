import { NavLink } from "react-router";

export default function Nav() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isActive ? "active" : "",
            isPending ? "pending" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        Welcome
      </NavLink>
      <NavLink to="guest">Greeting</NavLink>
    </nav>
  );
}
