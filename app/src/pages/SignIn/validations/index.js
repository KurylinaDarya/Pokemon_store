import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Not valid email address format"),
  password: Yup.string().matches(
    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
    "Not valid  password"
  ),
});
