import { Link } from "react-router-dom";


function CTA({ text, path = "/" }) {
  return (
    <Link
      to={ path }
      className="my-2 py-3 px-5 shadow-md rounded hover:ring hover:ring-teal-300 border hover:border-none transition duration-300">
      { text }
    </Link>
  );
}


export default CTA;
