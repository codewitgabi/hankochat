import {
  ChatBubbleOvalLeftEllipsisIcon,
  Cog6ToothIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutBtn";


function BottomNav({ setUser }: any) {
  return (
    <nav className="container fixed bottom-0 left-0 w-full flex justify-between py-5 px-8 bg-blue-950/10 shadow-lg">
      <Link to="/" className="hover:text-teal-300 transition duration-300">
        <HomeIcon className="h-6 w-6" />
      </Link>
      <Link to="/chat" className="hover:text-teal-300 transition duration-300">
        <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
      </Link>
      <Link to="/profile-settings" className="hover:text-teal-300 transition duration-300">
        <Cog6ToothIcon className="h-6 w-6" />
      </Link>
      <LogoutButton setUser={ setUser } />
    </nav>
  );
}


export default BottomNav;
