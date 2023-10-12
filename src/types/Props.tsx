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

export interface Session {
  userID: string;
  jwt: string;
  expirationSeconds: number;
}

export interface AuthProps {
  user: User;
  setUser: any;
  session: Session;
}

