import {
  useEffect,
  useCallback,
  useMemo
} from "react";
import { useNavigate } from "react-router-dom";
import { register, Hanko } from "@teamhanko/hanko-elements";
import axios from "axios";


const hankoApi = import.meta.env.VITE_HANKO_API_URL;


function HankoAuth() {
  const navigate = useNavigate();
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const redirectAfterLogin = useCallback(async () => {
    // add user to backend user

    const user = await hanko.user.getCurrent();
    const session = hanko.session.get();

    console.log("Session => " , session);
    console.log("User => ", user);

    axios.get(`http://localhost:3000/auth/isUser/${user.id}`)
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
      redirectAfterLogin();
    })
  }, [hanko, redirectAfterLogin]);

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
