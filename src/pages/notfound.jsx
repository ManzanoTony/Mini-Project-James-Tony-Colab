import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="content">
      <h1>Page not found</h1>
      <Link to="/">Go back to home</Link>
    </main>
  );
}

export default NotFound;
