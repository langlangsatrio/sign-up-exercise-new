"use client";
import { Formik, Form, FormikProps } from "formik";
import { userSettingSchema } from "../userSettingSchema";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import Forminput from "@/components/FormInput";
import { setSignIn } from "@/lib/redux/features/userSlice";
import { useEffect } from "react";
import { callAPI } from "@/config/axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface IEdit {
  firstName: string;
  lastName: string;
  email: string;
}

export default function userSettingPage() {
  const [stateData, setStateData] = useState<object | null>(); //untuk update data baru. Belum work///
  const router = useRouter();

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);

  const keepLogin = async () => {
    try {
      const tokenData = localStorage.getItem("dataUser");
      if (tokenData) {
        const response = await callAPI.get(
          `/user?id=${JSON.parse(tokenData)?.id}`
        );
        console.log("Check sign in response:", response.data);
        dispatch(setSignIn({ ...response.data[0], isAuth: true }));
        localStorage.setItem("dataUser", JSON.stringify(response.data[0]));
        setStateData(response.data[0]);
      } else {
        dispatch(setSignIn({ isAuth: false }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    keepLogin();
  }, []);

  const [visible, setVisible] = useState<boolean>(false);
  const seeForm = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div className="p-24 flex flex-col gap-7 bg-slate-200 w-full h-fit rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="form text-lg ">
            <img />
            <h1 className="my-2 font-bold">Hi, this is your information:</h1>
            <h1>Name: {user.name}</h1>
            <h1>Username: {user.username}</h1>
            <h1>Email: {user.email}</h1>
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={seeForm}
              className="w-full h-full p-2 font-bold rounded-md bg-blue-500 text-white px-5"
            >
              Edit Profile
            </button>
            <button
              type="button"
              className="w-full h-full p-2 font-bold rounded-md bg-blue-500 text-white px-5"
              onClick={() => router.push("/post")}
            >
              Go to post
            </button>
          </div>
        </div>
        {visible && (
          <div>
            <Formik
              validationSchema={userSettingSchema}
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
              }}
              onSubmit={(values, { resetForm }) => {
                const postToDB = async () => {
                  try {
                    const postData = await callAPI.patch(`/user/${user.id}`, {
                      ...values,
                      name: values.firstName + " " + values.lastName,
                      email: values.email,
                    });
                    console.log("ini user id: ", user.id);
                    console.log("ini postdata: ", postData);
                    console.log("ini values: ", values);
                    setStateData(postData.data[0]);
                  } catch (error) {
                    console.error(error);
                  }
                };
                postToDB();
                resetForm();
                console.log("ini state data luar postdb:", stateData);

                const reSign = async () => {
                  try {
                    const getNewData = await callAPI.get(`/user?id=${user.id}`);
                    dispatch(setSignIn({ ...getNewData.data[0] }));
                    localStorage.setItem(
                      "dataUser",
                      JSON.stringify(getNewData.data[0])
                    );
                  } catch (error) {}
                };

                reSign();
              }}
            >
              {(props: FormikProps<IEdit>) => {
                const { values, handleChange, errors, touched } = props;
                return (
                  <Form>
                    <div>
                      <Forminput
                        label="First Name"
                        type="text"
                        id="firstName"
                        placeholder="Put First Name Here.."
                        onChange={handleChange}
                        value={values.firstName}
                      />
                      <Forminput
                        label="Last Name"
                        type="text"
                        id="lastName"
                        placeholder="Put Last Name Here.."
                        onChange={handleChange}
                        value={values.lastName}
                      />
                      <Forminput
                        label="Email"
                        type="email"
                        id="email"
                        placeholder="Put Email Here.."
                        onChange={handleChange}
                        value={values.email}
                      />
                    </div>
                    <button
                      type="submit"
                      className="p-2 font-bold rounded-md bg-blue-500 text-white px-5 my-4"
                    >
                      Submit
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
}
