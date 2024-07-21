import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="flex gap-4">
      <li
        className={`text-lg ${
          window.location.pathname !== "/"
            ? "text-base-content"
            : "text-primary"
        }`}
      >
        <Link to="/">Today</Link>
      </li>
      <li
        className={`text-lg ${
          window.location.pathname !== "/tomorrow"
            ? "text-base-content"
            : "text-primary"
        }`}
      >
        <Link to="/tomorrow">Tomorrow</Link>
      </li>
      <li
        className={`text-lg ${
          window.location.pathname !== "/next-days"
            ? "text-base-content"
            : "text-primary"
        }`}
      >
        <Link to="/next-days">Next 7 days</Link>
      </li>
    </ul>
  );
}
