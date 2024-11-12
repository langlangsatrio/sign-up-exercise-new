"use client";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { US } from "country-flag-icons/react/3x2";
import { ID } from "country-flag-icons/react/3x2";

interface IFormInput {
  label?: string;
  type: string;
  id: string;
  value?: string;
  placeholder?: string;
  name?: string;
  onChange?: (e: any) => void;
}

const Forminput: React.FC<IFormInput> = ({
  label,
  type,
  id,
  name,
  value,
  placeholder,
  onChange,
}) => {
  const [visible, setVisible] = useState<Boolean>(false);
  if (type === "password") {
    let icon;
    let activeType;
    if (visible) {
      icon = <FaRegEye color="black" />;
      activeType = "text";
    } else {
      icon = <FaEyeSlash color="black" />;
      activeType = "password";
    }
    return (
      <div className="flex flex-col mb-4">
        <label className="font-semibold text-lg text-gray-600 w-full">
          {label}
        </label>
        <div className="relative">
          <input
            type={activeType}
            id={id}
            name={name}
            value={value}
            className="rounded-md border p-2 w-full text-gray-900 shadow-sm my-1"
            onChange={onChange}
          />
          <button
            type="button"
            className="absolute right-3 bg-gray h-full"
            onClick={() => setVisible(!visible)}
          >
            {icon}
          </button>
        </div>
      </div>
    );
  }

  const [countryCode, setCountryCode] = useState<string>("+62");

  const countryCollection: any = [
    { countries: "Indonesia", icon: <ID />, code: "+62" },
    {
      countries: "United Kingdom",
      icon: "",
      code: "+44",
    },
    { countries: "USA", icon: <US />, code: "+1" },
  ];

  if (id === "phone") {
    return (
      <div className="flex flex-col my-1">
        <label className="font-semibold text-lg text-gray-600 w-full">
          {label}
        </label>
        <div className="flex">
          <select
            className="text-black p-3 bg-white rounded-md shadow-sm my-1"
            onChange={(e) => {
              const selectedCountry = countryCollection.find(
                (countryList: any) => countryList.countries === e.target.value
              );
              console.log(selectedCountry);
              setCountryCode(selectedCountry.code);
            }}
          >
            {countryCollection.map((countryList: any) => {
              return (
                <option key={countryList.code} value={countryList.countries}>
                  {countryList.countries}
                </option>
              );
            })}
          </select>
          <input
            type="number"
            id={id}
            name={name}
            value={value}
            className="rounded-md border p-2 w-full text-gray-900 shadow-sm my-1"
            placeholder={countryCode}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col my-1">
      <label className="font-semibold text-lg text-gray-600 w-full">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        className="rounded-md border p-2 w-full text-gray-900 shadow-sm my-1"
        onChange={onChange}
      />
    </div>
  );
};

export default Forminput;
