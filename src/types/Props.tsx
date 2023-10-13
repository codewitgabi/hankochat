import React from "react";

export interface CTAProps {
  text: string;
  path: string;
}

export interface AccordionProps {
  label: string;
  content: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  image: string;
}

export type UserOrNull = User | null;

export interface Session {
  userID: string;
  jwt: string;
  expirationSeconds: number;
}

export interface AuthProps {
  user: UserOrNull;
  setUser: React.Dispatch<React.SetStateAction<UserOrNull>>;
  session: Session;
}

