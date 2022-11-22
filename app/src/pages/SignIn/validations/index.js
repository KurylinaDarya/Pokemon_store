import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Not valid email address format"),
});
