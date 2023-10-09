import { Link } from "react-router-dom";


function Error404Page() {
  return (
    <div className="container p-4">
      <h2>Not Found</h2>
      <Link to="/" className="text-teal-400 text-sm">Back to Homepage</Link>
    </div>
  );
}


export default Error404Page;
