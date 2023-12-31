import React from "react";
import axios from "axios";
import TopNavBar from "../components/NavBar";
import { Hanko } from "@teamhanko/hanko-elements";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;
const SERVER_URL = import.meta.env.VITE_SERVER_URL;


function CompleteProfile({ user, setUser, session }) {
  const hanko = useMemo(() => new Hanko(hankoApi), []);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await hanko.user.getCurrent();

    try {
      await axios.post(`${SERVER_URL}/auth/create-user`, {
        _id: user?.id,
        email: user?.email,
        username: e.target?.username?.value,
      })
      navigate("/chat");
    } catch(err) {
      alert(err.message);
    }
  };

  return (
    <>
      <TopNavBar user={ user } setUser={ setUser } session={ session } />
    <div className="container bg-blue-950/10 shadow-lg p-8 mt-9">
      <h2 className="mb-5">Complete Profile</h2>
      <form method="post" action="/" onSubmit={ handleSubmit }>
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
