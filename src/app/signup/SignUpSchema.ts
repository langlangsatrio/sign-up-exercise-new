import * as Yup from "yup";

//FORMIK AND YUP IS A FORM VALIDATION
//YUP IS USED TO CREATE THE VALIDATION SETTING

export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("Firstname is required"),
  lastName: Yup.string().required("Lastname is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(3, "password must be atleat 3 character")
    .required("Password is required"),
  confPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must be match")
    .required("Password is required"),
});
