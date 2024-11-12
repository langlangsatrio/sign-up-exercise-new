"use client";
import Form from "@/components/FormInput";
import { callAPI } from "@/config/axios";
import { useState } from "react";

export default function SignupPage() {
  const [firstName, setFirstName] = useState<string>("");
  const onHandleFirstName = (e: any) => {
    setFirstName(e.target.value);
  };
  const [lastName, setLastName] = useState<string>("");
  const onHandleLastName = (e: any) => {
    setLastName(e.target.value);
  };
  const [email, setEmail] = useState<string>("");
  const onHandleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState<string>("");
  const onHandlePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const [passwordSame, setPasswordSame] = useState<string>("");
  const onHandlePasswordSame = (e: any) => {
    setPasswordSame(e.target.value);
  };

  const fullName = `${firstName} ${lastName}`;

  // const [data, setData] = useState<{
  //   name: string;
  //   email: string;
  //   password: string;
  // }>({ name: "", email: "", password: "" });

  // const onHandleData = () => {
  //   if (password !== passwordSame) {
  //     alert("Password is not the same");
  //   } else {
  //     const newData = {
  //       ...data,
  //       name: fullName,
  //       email: email,
  //       password: password,
  //     };
  //     return newData;
  //   }
  // };

  const onSignUp = async () => {
    if (password == passwordSame) {
      const newData = {
        name: fullName,
        email: email,
        password: password,
      };
      try {
        const res = await callAPI.post("user", newData);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Password is not the same");
    }
  };

  return (
    <div>
      <div className="flex justify-evenly bg-gray-900 w-full h-screen">
        <div className="w-full h-screen bg-red-700"></div>
        <div className="w-full h-full p-40 flex items-center justify-center">
          <div className="p-24  bg-slate-200 w-full h-fit rounded-2xl">
            <h1 className="font-bold text-3xl text-black mb-6">Sign Up</h1>
            <div className="grid grid-cols-2 gap-3 justify-between">
              <Form
                label="First Name"
                type="text"
                id="firstname"
                placeholder="Put First Name Here.."
                onChange={onHandleFirstName}
              />
              <Form
                label="Last Name"
                type="text"
                id="lastname"
                placeholder="Put Last Name Here.."
                onChange={onHandleLastName}
              />
            </div>
            <Form
              label="Email"
              type="email"
              id="email"
              placeholder="Put Email Here.."
              onChange={onHandleEmail}
            />
            <Form label="Phone Number" type="number" id="phone" />
            <Form
              label="Password"
              type="password"
              id="password"
              onChange={onHandlePassword}
            />
            <Form
              label="Password"
              type="password"
              id="password-config"
              onChange={onHandlePasswordSame}
            />
            <label className="flex gap-2 my-2">
              <input type="checkbox" />
              <p className="text-black">
                I agree to our <a className="font-bold">term</a> and{" "}
                <a className="font-bold">policy</a>
              </p>
            </label>
            <div className="flex gap-2 my-2">
              <label className="flex gap-2 my-2">
                <input type="checkbox" id="policy1" />
                <p className="text-black">
                  By ticking this, you agree that your data are proccessed by
                  the company <a className="font-bold">term</a> and{" "}
                  <a className="font-bold">policy</a>
                </p>
              </label>
            </div>
            <div className="flex gap-2 items-center justify-between mt-8">
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-black"
                onClick={onSignUp}
              >
                Sign Up
              </button>
              <h3 className="text-lg font-semibold text-black">
                Already have account?{" "}
                <a href="/login" className="text-red-900 hover:underline">
                  Login Here
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
