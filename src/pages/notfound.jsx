import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="content">
      <h1>Page not found</h1>
      <Link to="/">Back to My Collection</Link>
    </main>
  );
}

export default NotFound;
