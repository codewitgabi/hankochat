import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
//import Avatar from "../assets/AvatarUnknown.jpg";
import { User } from "../types/Props";
import LogoutButton from "./LogoutBtn";


function NavBar({ user, setUser }: { user: User, setUser: any}) {
  return (
    <header className="container bg-blue-950/10 shadow-lg px-8 py-5">
      <nav className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Link to="/">
            <span className="text-white">Hanko</span>
            <span className="text-blue-500">Chat</span>
          </Link>
        </div>
        { user &&
          <LogoutButton setUser={ setUser } />
        }
      </nav>
    </header>
  );
}


export default NavBar;
