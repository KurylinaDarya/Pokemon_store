import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Long")
    .required("First name is required"),

  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Long")
    .required("Last name is required"),

  email: Yup.string().email("Email must be an email").required("Required"),

  password: Yup.string()
    .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, "Not valid  password")
    .required("Required"),
  //   confirmPassword: Yup.string().oneOf(
  //     [Yup.ref(password)],
  //     "Password not match"
  //   ),

  gender: Yup.string().required("Gender is required"),

  phone: Yup.string()
    .matches(
      /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/,
      "Not valid phone number"
    )
    .required("Phone is required"),
});
