import { Link } from "react-router-dom";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { ROUTE_NAMES } from "../../../router/routeNames";

import iconsEnter from "../../../static/img/iconsEnter.png";

import styles from "./styles.module.scss";

const SignIn = ({
  formik,
  valuePassword,
  onClickShowPassword,
  open,
  onClickOpen,
  onClose,
}) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.title}
        style={{ cursor: "pointer" }}
        onClick={onClickOpen}
      >
        Enter
        <img src={iconsEnter} alt="icons enter" />
      </div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
        className={styles.dialog}
      >
        <DialogTitle id="form-dialog-title" className={styles.dialogTitle}>
          Enter
        </DialogTitle>

        <DialogContent className={styles.dialogContent}>
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <FormControl variant="standard">
              <InputLabel
                color={formik.errors.email ? "error" : "success"}
                htmlFor="standard-adornment-password"
              >
                {formik.errors.email
                  ? `Email: ${formik.errors.email}`
                  : "Email"}
              </InputLabel>

              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="on"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={styles.input}
              />
            </FormControl>

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

            <button onClick={onClose} type="submit" className={styles.button}>
              Login
            </button>
          </form>
          <DialogContentText>
            <Link
              onClick={onClose}
              to={ROUTE_NAMES.SIGN_UP}
              className={styles.dialogContentText}
            >
              Registration
            </Link>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SignIn;
