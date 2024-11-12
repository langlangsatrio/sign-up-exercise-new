"use client";
import Forminput from "@/components/FormInput";
import { callAPI } from "@/config/axios";
import { Formik, Form, FormikProps } from "formik";
import { SignUpSchema } from "./SignUpSchema";

interface ISignUpValue {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confPassword: string;
}

export default function SignupPage() {
  const onSignUp = async (formValue: ISignUpValue) => {
    const newData = {
      name: `${formValue.firstName} ${formValue.lastName}`,
      email: formValue.email,
      password: formValue.password,
    };
    try {
      const res = await callAPI.post("user", newData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-evenly bg-gray-900 w-full h-screen">
        <div className="w-full h-screen bg-red-700"></div>
        <div className="w-full h-full p-40 flex items-center justify-center">
          <Formik
            validationSchema={SignUpSchema}
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confPassword: "",
            }}
            onSubmit={(values, { resetForm }) => {
              console.log("Value from input: ", values);
              resetForm();
            }}
          >
            {(props: FormikProps<ISignUpValue>) => {
              const { values, handleChange, errors, touched } = props;
              return (
                <Form>
                  <div className="container form">
                    <div className="p-24  bg-slate-200 w-full h-fit rounded-2xl">
                      <h1 className="font-bold text-3xl text-black mb-6">
                        Sign Up
                      </h1>

                      <div className="grid grid-cols-2 gap-3 justify-between">
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
                      </div>
                      <Forminput
                        label="Email"
                        type="email"
                        id="email"
                        placeholder="Put Email Here.."
                        onChange={handleChange}
                        value={values.email}
                      />
                      <p className="text-md font-semibold text-red-600">
                        {errors.email}
                      </p>
                      <Forminput
                        label="Phone Number"
                        type="number"
                        id="phone"
                      />
                      <Forminput
                        label="Password"
                        type="password"
                        id="password"
                        onChange={handleChange}
                        value={values.password}
                      />
                      <p className="text-md font-semibold text-red-600">
                        {errors.password}
                      </p>
                      <Forminput
                        label="Password"
                        type="password"
                        id="confPassword"
                        onChange={handleChange}
                        value={values.confPassword}
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
                            By ticking this, you agree that your data are
                            proccessed by the company{" "}
                            <a className="font-bold">term</a> and{" "}
                            <a className="font-bold">policy</a>
                          </p>
                        </label>
                      </div>
                      <div className="flex gap-2 items-center justify-between mt-8">
                        <button
                          type="submit"
                          className="px-4 py-2 rounded-md bg-black"
                        >
                          Sign Up
                        </button>
                        <h3 className="text-lg font-semibold text-black">
                          Already have account?{" "}
                          <a
                            href="/login"
                            className="text-red-900 hover:underline"
                          >
                            Login Here
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
