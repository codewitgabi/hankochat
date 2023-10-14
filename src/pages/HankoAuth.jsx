import React, {
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
import { register, Hanko } from "@teamhanko/hanko-elements";
import axios from "axios";
import { SERVER_URL } from "../utils";


const hankoApi = import.meta.env.VITE_HANKO_API_URL;


function HankoAuth({ user, setUser }) {
  const navigate = useNavigate();
  const hanko = useMemo(() => new Hanko(hankoApi), []);
  const session = hanko.session.get();

  const redirectAfterLogin = useCallback(async () => {
    // add user to backend user

    try {
      const response = await axios.get(`${SERVER_URL}/auth/isUser/${user?.id}`)

      if (response.statusText === "OK") {
        if (!response.data.isUser) {
          navigate("/complete-profile");
        } else {
          navigate("/chat");
        }
      }
    } catch (err) {
      navigate("/complete-profile");
    }

  }, [navigate]);

  useEffect(() => {
    if (session) {
      navigate("/")
    }
  });

  useEffect(() => {
    hanko.onAuthFlowCompleted(async () => {
    if (hanko.session.isValid()) {
      if (session) {
        console.log(session.userID)
        try {
          const response = await axios.get(`${SERVER_URL}/auth/getUser/${session?.userID}`)
      
          if (response.statusText === "OK") {
            setUser(response.data);
          }
        } catch (e) {
         setUser(null);
        } finally {
          redirectAfterLogin();
        }
      }
    }
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