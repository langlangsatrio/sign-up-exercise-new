import { ReactNode } from "react";
import Login from "./page";
import { Metadata } from "next";

interface ISignInLayout {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Login",
  description: "Enter your details",
};

const LoginLayout: React.FC<ISignInLayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default LoginLayout;
