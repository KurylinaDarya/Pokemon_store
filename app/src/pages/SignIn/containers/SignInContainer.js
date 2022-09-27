import React from "react";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ROUTE_NAMES } from "../../../router/routeNames";
import { signIn } from "../reducers/index";
import { useForm } from "../../../hooks/useForm";
import SignIn from "../components/index";

const SignInContainer = () => {
  const dispatch = useDispatch();

  const [signInForm, handleFormChange, handleFormReset] = useForm({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(signIn(signInForm));
      handleFormReset();
    },
    [dispatch, signInForm, handleFormReset]
  );

  //   useEffect(() => {
  //     if (...) {
  //       const timeout = setTimeout(() => {
  //         navigate(ROUTE_NAMES.CART);
  //       }, 3000);

  //       return () => clearTimeout(timeout);
  //     }
  //   }, [navigate]);

  return (
    <div>
      <SignIn
        signInForm={signInForm}
        handleSubmit={handleSubmit}
        handleFormChange={handleFormChange}
      />
    </div>
  );
};

export default SignInContainer;
