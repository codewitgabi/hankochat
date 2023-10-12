import axios from "axios";
import TopNavBar from "../components/NavBar";
import { Hanko } from "@teamhanko/hanko-elements";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AuthProps } from "../types/Props";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;


function CompleteProfile({ user, setUser, session }: AuthProps) {
  const hanko = useMemo(() => new Hanko(hankoApi), []);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await hanko.user.getCurrent();

    axios.post(
    "http://localhost:3000/auth/create-user", {
      _id: user.id,
      email: user.email,
      username: e.target.username.value,
    })
    .then(() => {
      navigate("/chat");
    })
    .catch((err) => {
      alert(err.message);
    })
  };

  return (
    <>
      <TopNavBar user={ user } setUser={ setUser } session={ session } />
    <div className="container bg-blue-950/10 shadow-lg p-8 mt-9">
      <h2 className="mb-5">Complete Profile</h2>
      <form method="post" className="" onSubmit={ handleSubmit }>
        <input
          type="text"
          name="username"
          required
          placeholder="Username"
          className="w-full p-2 my-4 rounded text-black outline-none"
        />
        <input
          type="file"
          name="image"
          required
          accept="image/*"
          className="my-4"
        />
        <button className="w-full md:w-1/2 border hover:ring hover:ring-teal-300 px-5 py-3 block mt-5">Create Profile</button>
      </form>
    </div>
    </>
  );
}


export default CompleteProfile;
