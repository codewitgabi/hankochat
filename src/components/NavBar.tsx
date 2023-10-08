import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Avatar from "../assets/AvatarUnknown.jpg";


function NavBar() {
  return (
    <header className="container bg-blue-950/10 shadow-lg px-8 py-5">
      <nav className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          {/* <Bars3Icon className="h-6 w-6 text-white" /> */}
          <Link to="/">
            <span className="text-white">Hanko</span>
            <span className="text-blue-500">Chat</span>
          </Link>
        </div>
        <img src={ Avatar } alt="profile-photo" className="w-[30px] h-[30px] rounded-full" />
      </nav>
    </header>
  );
}


export default NavBar;
