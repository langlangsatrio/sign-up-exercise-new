import { ReactNode } from "react";
import { Metadata } from "next";

interface ISignUpLayout {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Join this app",
};

const SignUpLayout: React.FC<ISignUpLayout> = ({ children }) => {
  return <div>{children}</div>;
};

export default SignUpLayout;
