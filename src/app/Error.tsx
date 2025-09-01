import { NavLink } from "react-router";

export default function Error() {
  return (
    <main className="flex flex-col gap-2 items-center justify-center">
      <h2 className="text-6xl">Error Page</h2>
      <p>someting wrong...</p>
      <NavLink to="/" className="button bg-amber-900 w-fit rounded-xl">
        Return to Home
      </NavLink>
    </main>
  );
}
