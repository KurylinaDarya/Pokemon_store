import React from "react";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import startCase from "lodash/startCase";

import { signUp } from "../api";
import { useForm } from "../../../hooks/useForm";
import { useFetching } from "../../../hooks/useFetching";
import { ROUTE_NAMES } from "../../../router/routeNames";
import SignUp from "../components/index";

const SignUpContainer = () => {
  const [formValues, handleFormChange, handleFormReset] = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
  });

  const navigate = useNavigate();
  const { data, handleDataLoad, isLoading, error } = useFetching(
    signUp,
    null,
    false
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      handleDataLoad(formValues);
      handleFormReset();
    },
    [formValues]
  );

  useEffect(() => {
    if (data?.data.success) {
      const timeout = setTimeout(() => {
        navigate(ROUTE_NAMES.SIGN_IN);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [error, data, navigate]);

  return (
    <div>
      <SignUp
        data={data}
        error={error}
        startCase={startCase}
        formValues={formValues}
        handleSubmit={handleSubmit}
        handleFormChange={handleFormChange}
        handleFormReset={handleFormReset}
      />
    </div>
  );
};

export default SignUpContainer;
