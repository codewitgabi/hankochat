import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TopNavBar from "../components/NavBar";
import BottomNav from "../components/BottomNav";
import UserBox from "../components/UserBox";
import { SERVER_URL } from "../utils";


function ChatPage({ user, setUser, session }) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });

  useEffect(() => {
    async function getUsers() {
      await axios.get(`${SERVER_URL}/auth/getUsers`)
      .then((response) => {
        const newUsers = response.data.filter((u) => u.id !== user.id)
        setUsers(newUsers);
      })
      .catch(e => setUsers([]))
    }

    getUsers();
  }, []);

  return (
    <>
      <TopNavBar
        user={ user }
        session={ session }
        setUser={ setUser }
      />

      {
        users &&
        users.map((user) => <UserBox key={ user.id } user={ user } />)
      }

      <BottomNav setUser={ setUser } />
    </>
  );
}


export default ChatPage;
