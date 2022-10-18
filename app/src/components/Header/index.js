import { memo } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";

import { ROUTE_NAMES } from "../../routes/routeNames";
import { isAuthSelector } from "../../selectors";

import HeaderProfile from "../HeaderProfile/index";

import logo from "../../static/img/logo.png";
import icons from "../../static/img/icons.png";
import iconsEnter from "../../static/img/iconsEnter.png";
import styles from "./styles.module.scss";

const Header = () => {
  const isAuth = useSelector(isAuthSelector);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link className={styles.logoLink} to={ROUTE_NAMES.HOME}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      {/* 
      <div className={styles.menu}>
        {isAuth ? (
          <HeaderProfile />
        ) : (
          <NavLink className={styles.signIn} to={ROUTE_NAMES.SIGN_IN}>
            <AccountCircle color="action" fontSize="large" />
            Enter the store
            <img src={iconsEnter} alt="icons enter" />
          </NavLink>
        )}
      </div> */}

      <div className={styles.menu}>
        <Link className={styles.menuItem} to={ROUTE_NAMES.SIGN_IN}>
          Enter the store
          <img src={iconsEnter} alt="icons enter" />
        </Link>
      </div>

      <div className={styles.logoCart}>
        <Link className={styles.cart} to={ROUTE_NAMES.CART}>
          <img src={icons} alt="LogoCart" />
        </Link>
      </div>
    </div>
  );
};

export default memo(Header);
