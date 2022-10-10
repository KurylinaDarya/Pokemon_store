import { useState } from "react";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { promptPassword, promptPhoneNumber } from "../constans/index";

import styles from "./styles.module.scss";

const SignUp = ({
  formik,
  data,
  error,
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
            autoComplete="on"
            color={formik.errors.firstName ? "error" : "success"}
            label={
              formik.errors.firstName ? formik.errors.firstName : "First name"
            }
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className={styles.input}
          />
          <TextField
            id="lastName"
            name="lastName"
            type="lastName"
            autoComplete="on"
            color={formik.errors.lastName ? "error" : "success"}
            label={
              formik.errors.lastName ? formik.errors.lastName : "Last name"
            }
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className={styles.input}
          />
          <Tooltip title={promptPhoneNumber} placement="bottom-start">
            <TextField
              id="phone"
              name="phone"
              type="phone"
              autoComplete="on"
              color={formik.errors.phone ? "error" : "success"}
              label={formik.errors.phone ? formik.errors.phone : "Phone"}
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.phone}
              className={styles.input}
            />
          </Tooltip>
          <FormControl variant="standard">
            <InputLabel
              id="gender-label"
              color={formik.errors.gender ? "error" : "success"}
            >
              {formik.errors.gender ? formik.errors.gender : "Gender"}
            </InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              color={formik.errors.gender ? "error" : "success"}
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
            autoComplete="on"
            color={formik.errors.email ? "error" : "success"}
            label={
              formik.errors.email ? `Email: ${formik.errors.email}` : "Email"
            }
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.email}
            className={styles.input}
          />
          <Tooltip title={promptPassword} placement="bottom-start">
            <FormControl variant="standard">
              <InputLabel
                color={formik.errors.password ? "error" : "success"}
                htmlFor="standard-adornment-password"
              >
                {formik.errors.password
                  ? `Password: ${formik.errors.password}`
                  : "Password"}
              </InputLabel>
              <Input
                id="password"
                name="password"
                label="lol"
                autoComplete="on"
                type={valuePassword.showPassword ? "text" : "password"}
                color={formik.errors.password ? "error" : "success"}
                value={formik.values.password}
                onChange={formik.handleChange}
                className={styles.input}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={onClickShowPassword}>
                      {/* {valuePassword.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )} */}
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
