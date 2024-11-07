"use client";
import { callAPI } from "@/config/axios";
import { LanguageContext } from "@/contexts/LanguageContext";
import { log } from "console";
import { FC, FunctionComponent, useContext, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setSignIn } from "@/lib/redux/features/userSlice";

interface INavbarProps {}

//MENJAGA USER AGAR TETAP LOGIN
//ALGO
//1. CHECK APAKAH ADA DATA LOGIN PADA LOCAL STORAGE
//2. JIKA ADA, GUNAKAN DATA ID USER UNTUK MENGAMBIL DATA MELALUI API
//3. SETELAH MENDAPAT DATA USER DARI API, SIMPAN LAGI KE GLOBAL STORE REDUX
//4. SIMPAN JUGA KE LOCAL-STORAGE

const Navbar: FunctionComponent<INavbarProps> = (props) => {
  const user = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  const { language, setLanguage } = useContext(LanguageContext); //INISIALISASI USECONTEXT
  const keepLogin = async () => {
    try {
      const tokenData = localStorage.getItem("dataUser");
      if (tokenData) {
        const response = await callAPI.get(
          `/users?id=${JSON.parse(tokenData)?.id}`
        );
        console.log("Check sign in response:", response.data);
        dispatch(setSignIn({ ...response.data[0], isAuth: true }));
        localStorage.setItem("dataUser", JSON.stringify(response.data[0]));
      } else {
        dispatch(setSignIn({ isAuth: false }));
      }
    } catch (error) {}
  };

  useEffect(() => {
    keepLogin();
  }, []);
  return (
    <div className="flex justify-between w-full px-32 py-7 bg-slate-200 ">
      <div className="text-black font-bold text-xl">Logo</div>
      <div className="flex justify-evenly gap-5 items-center">
        <div className="relative">
          <span className="absolute m-2 h-full">
            <IoSearchSharp color="gray  " />
          </span>
          <input
            type="search"
            className="w-48 h-8 rounded-md px-10 text-black"
            placeholder="Search"
          />
        </div>
        <select //IMPLEMENTASI CONTEXT
          className="bg-slate-300 h-8 rounded-md px-3 text-black"
          value={language}
          onChange={(e: any) => {
            setLanguage(e.target.value);
          }}
        >
          <option value="EN">English (United States)</option>
          <option value="ID">Bahasa Indonesia</option>
          <option value="FR">Français</option>
        </select>
        {user.email ? (
          <div className="flex gap-4">
            <p className="text-black font-semibold text-lg">
              Hi, {user.username}!
            </p>
            <button className="bg-slate-300 text-black px-7 h-full rounded-md">
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            {" "}
            <button className="bg-slate-300 text-black px-7 py-1 h-full rounded-md">
              <a href="/signup">Sign Up</a>
            </button>
            <button className="bg-gray-900 text-white px-7 py-1 h-full rounded-md">
              <a href="/login">Login</a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
