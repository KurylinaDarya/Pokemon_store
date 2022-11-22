import { useState } from "react";

import startCase from "lodash/startCase";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { hintTexts } from "../constans/index";

import styles from "./styles.module.scss";

const SignUp = ({
  formik,
  data,
  error,
  errors,
  touched,
  valuePassword,
  onClickShowPassword,
}) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Сreate a new account</h1>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <TextField
            id="firstName"
            name="firstName"
            type="firstName"
            variant="standard"
            errors={formik.errors.firstName}
            value={formik.values.firstName}
            color={errors ? "error" : "success"}
            label={
              errors && touched
                ? `${startCase("firstName")}: ${errors}`
                : startCase("firstName")
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.firstName}
            className={styles.input}
          />
          <TextField
            id="lastName"
            name="lastName"
            type="lastName"
            variant="standard"
            errors={formik.errors.lastName}
            value={formik.values.lastName}
            color={errors ? "error" : "success"}
            label={
              errors && touched
                ? `${startCase("lastName")}: ${errors}`
                : startCase("lastName")
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.lastName}
            className={styles.input}
          />
          <Tooltip title={hintTexts.phone} placement="bottom-start">
            <TextField
              id="phone"
              name="phone"
              type="phone"
              variant="standard"
              errors={formik.errors.phone}
              value={formik.values.phone}
              color={errors ? "error" : "success"}
              label={
                errors && touched
                  ? `${startCase("phone")}: ${errors}`
                  : startCase("phone")
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.phone}
              className={styles.input}
            />
          </Tooltip>
          <FormControl variant="standard">
            <InputLabel id="gender-label" color={errors ? "error" : "success"}>
              {errors ? errors : "Gender"}
            </InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              name="gender"
              errors={formik.errors.gender}
              value={formik.values.gender}
              onChange={formik.handleChange}
              color={errors && touched ? "error" : "success"}
              onBlur={formik.handleBlur}
              touched={formik.touched.gender}
              className={styles.input}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="email"
            name="email"
            type="email"
            variant="standard"
            value={formik.values.email}
            errors={formik.errors.email}
            color={errors ? "error" : "success"}
            label={
              errors && touched
                ? `${startCase("email")}: ${errors}`
                : startCase("email")
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.email}
            className={styles.input}
          />
          <Tooltip title={hintTexts.password} placement="bottom-start">
            <FormControl variant="standard">
              <InputLabel color={errors ? "error" : "success"}>
                {errors && touched ? `Password: ${errors}` : "Password"}
              </InputLabel>
              <Input
                id="password"
                name="password"
                autoComplete="off"
                value={formik.values.password}
                errors={formik.errors.password}
                type={valuePassword.showPassword ? "text" : "password"}
                color={errors ? "error" : "success"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                touched={formik.touched.password}
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
          </Tooltip>

          <button className={styles.button} type="submit">
            Create Account
          </button>

          {data?.data.message && (
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                {data.data.message}
              </Alert>
            </Snackbar>
          )}

          {error?.response.data.message && (
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error">
                {error?.response.data.message}
              </Alert>
            </Snackbar>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
