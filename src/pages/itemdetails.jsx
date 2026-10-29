import { Link, useParams } from "react-router-dom";

function ItemDetails() {
  const { id } = useParams();

  return (
    <main className="content">
      <h1>Item Details</h1>
      <p>Item ID: {id}</p>
      <Link to="/">Go back to home</Link>
    </main>
  );
}

export default ItemDetails;
