import {
  useEffect,
  useCallback,
  useMemo
} from "react";
import { useNavigate } from "react-router-dom";
import { register, Hanko } from "@teamhanko/hanko-elements";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;


function HankoAuth() {
  const navigate = useNavigate();
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const redirectAfterLogin = useCallback(() => {
    navigate("/");
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

  return <hanko-auth />;
}


export default HankoAuth;
