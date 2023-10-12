import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;


function LogoutBtn({ setUser }: any) {
  const navigate = useNavigate();
  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const logout = async () => {
    try {
      await hanko?.user.logout();
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <ArrowRightOnRectangleIcon
      onClick={logout}
      className="h-6 w-6 hover:text-teal-300 transition duration-300">
      Logout
    </ArrowRightOnRectangleIcon>
  );
}


export default LogoutBtn;
