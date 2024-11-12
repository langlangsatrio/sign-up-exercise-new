import * as Yup from "yup";

//FORMIK AND YUP IS A FORM VALIDATION
//YUP IS USED TO CREATE THE VALIDATION SETTING

export const userSettingSchema = Yup.object().shape({
  firstName: Yup.string().required("Firstname is required"),
  lastName: Yup.string().required("Lastname is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
});
