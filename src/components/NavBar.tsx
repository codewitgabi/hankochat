import React from "react";
import { Link } from "react-router-dom";
//import Avatar from "../assets/AvatarUnknown.jpg";
import { UserOrNull } from "../types/Props";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import LogoutButton from "./LogoutBtn";


function NavBar({ user, setUser }: { user: UserOrNull, setUser: React.Dispatch<React.setActionState<UserOrNull>>}) {
  return (
    <header className="container bg-blue-950/10 shadow-lg px-8 py-5">
      <nav className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Link to="/">
            <span className="text-white">Hanko</span>
            <span className="text-teal-300">Chat</span>
          </Link>
        </div>
        { user &&
          <Link to="/chat" className="hover:text-teal-300 transition duration-300">
            <ChatBubbleOvalLeftEllipsisIcon className="w-7 h-7" />
          </Link>
        }
      </nav>
    </header>
  );
}


export default NavBar;
