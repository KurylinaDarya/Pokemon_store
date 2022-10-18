import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { ROUTE_NAMES } from "../../../routes/routeNames";
import { LoginSchema } from "../validations/index";
import { isAuthSelector } from "../../../selectors/index";
import { auth } from "../reducers/index";

import SignInLayout from "../components/Layout/index";

const SignInContainer = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  //   const { error, isLoading, isAuth } = useSelector(isAuthSelector);

  const isAuth = useSelector(isAuthSelector);

  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: LoginSchema,

    onSubmit: (values, { resetForm }) => {
      dispatch(auth(values));

      resetForm();
    },
  });

  useEffect(() => {
    if (isAuth) {
      const timeout = setTimeout(() => {
        navigate(ROUTE_NAMES.SHOP);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isAuth, navigate]);

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

  return (
    <SignInLayout
      formik={formik}
      isAuth={isAuth}
      open={open}
      onClickOpen={handleClickOpen}
      onClose={handleClose}
      valuePassword={valuePassword}
      onClickShowPassword={handleClickShowPassword}
    />
  );
};

export default SignInContainer;
