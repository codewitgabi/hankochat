import { Link } from "react-router-dom";


function UserBox({ user }) {
  return (
    <div className="container bg-blue-950/10 shadow-lg my-4 p-4 rounded text-cadetBlue uppercase">
      <Link to={ `/chat/${user?.id}` }>{ user?.username }</Link>
    </div>
  );
}


export default UserBox;
