import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { ROUTE_NAMES } from "../../../router/routeNames";
import { LoginSchema } from "../validations/index";
import { isAuthSelector } from "../../../selectors/index";
import { auth } from "../reducers/index";

import SignIn from "../components/index";

const SignInContainer = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(auth(values));

      resetForm();
    },
    validationSchema: LoginSchema,
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [valuePassword, setValuePassword] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValuePassword({
      ...valuePassword,
      showPassword: !valuePassword.showPassword,
    });
  };

  const navigate = useNavigate();

  const isAuth = useSelector(isAuthSelector);

  useEffect(() => {
    if (isAuth) {
      const timeout = setTimeout(() => {
        navigate(ROUTE_NAMES.SHOP);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isAuth, navigate]);

  return (
    <SignIn
      formik={formik}
      open={open}
      onClickOpen={handleClickOpen}
      onClose={handleClose}
      valuePassword={valuePassword}
      handleClickShowPassword={handleClickShowPassword}
    />
  );
};

export default SignInContainer;
