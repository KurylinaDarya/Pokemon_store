import { Link } from "react-router-dom";
import startCase from "lodash/startCase";

import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { ROUTE_NAMES } from "../../../../routes/routeNames";
import SnackbarWithAlert from "../../../../components/Snackbar/index";
import Spinner from "../../../../components/Spinner/index";

import styles from "./styles.module.scss";

const SignInLayout = ({
  formik,
  error,
  errors,
  touched,
  onClose,
  isAuth,
  isLoading,
  valuePassword,
  onClickShowPassword,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Enter</h1>
      <div className={styles.dialogContent}>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <TextField
            id="email"
            name="email"
            type="email"
            color={errors ? "error" : "success"}
            label={
              errors && touched
                ? `${startCase("email")}: ${errors}`
                : startCase("email")
            }
            errors={formik.errors.email}
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            // touched={formik.touched.email}
            className={styles.input}
          />

          <FormControl variant="standard">
            <InputLabel color={errors ? "error" : "success"}>
              {errors && touched ? `Password: ${errors}` : "Password"}
            </InputLabel>

            <Input
              id="password"
              name="password"
              autoComplete="off"
              type={valuePassword.showPassword ? "text" : "password"}
              color={errors ? "error" : "success"}
              errors={formik.errors.password}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              //   touched={formik.touched.password}
              className={styles.input}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={onClickShowPassword}>
                    {valuePassword.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <button onClick={onClose} type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>

      <Link onClick={onClose} to={ROUTE_NAMES.SIGN_UP} className={styles.link}>
        Registration
      </Link>
      {isLoading && <Spinner />}

      {isAuth && (
        <SnackbarWithAlert
          timeAlert={2000}
          textAlert="You successfully log in. Now we redirect you to store page."
          severity="success"
        />
      )}

      {error && (
        <SnackbarWithAlert
          timeAlert={3000}
          textAlert={error.message}
          severity="error"
        />
      )}
    </div>
  );
};

export default SignInLayout;
