import {
  useEffect,
  useCallback,
  useMemo,
  useReducer
} from "react";
import { useNavigate } from "react-router-dom";
import { register, Hanko } from "@teamhanko/hanko-elements";
import axios from "axios";
import reducer, { initState } from "../reducer";
import { AuthProps } from "../types/Props";


const hankoApi = import.meta.env.VITE_HANKO_API_URL;


function HankoAuth({ user, setUser, session }: AuthProps) {
  const navigate = useNavigate();
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const redirectAfterLogin = useCallback(async () => {
    // add user to backend user

    axios.get(`http://localhost:3000/auth/isUser/${user?.id}`)
    .then((response) => {
      if (!response.data.isUser) {
        navigate("/complete-profile");
      } else {
        navigate("/chat");
      }
    })
    .catch((err) => {
      navigate("/complete-profile");
    })

  }, [navigate]);

  useEffect(() => {
    hanko.onAuthFlowCompleted(() => {
    if (hanko.session.isValid()) {
      axios.get(`http://localhost:3000/auth/getUser/${session?.userID}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        setUser(null);
      })
    }
    redirectAfterLogin();
    })
  }, [hanko, redirectAfterLogin, user]);

  useEffect(() => {
    register(hankoApi).catch((error) => {
      console.log(error.message);
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <hanko-auth />
    </div>
  );
}


export default HankoAuth;
