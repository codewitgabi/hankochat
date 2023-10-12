import { createContext } from "react";


type UserContextType = {
  _id: string;
  username: string;
  email: string;
  image: string;
};


export const UserContext = createContext<UserContextType>(null);

