import { memo } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTE_NAMES } from "../../routes/routeNames";
import { isAuthSelector } from "../../selectors";

import logo from "../../static/img/logo.png";
import iconEnter from "../../static/img/iconEnter.png";

import IconCart from "../../components/IconCart/index";
import IconProfile from "../../components/IconProfile/index";

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

      <div className={styles.menu}>
        {isAuth ? (
          <div className={styles.profile}>
            <IconProfile />
          </div>
        ) : (
          <NavLink className={styles.menuItem} to={ROUTE_NAMES.SIGN_IN}>
            Enter the store
            <img src={iconEnter} alt="icons enter" />
          </NavLink>
        )}

        <NavLink className={styles.logoCart} to={ROUTE_NAMES.CART}>
          <IconCart />
        </NavLink>
      </div>
    </div>
  );
};

export default memo(Header);
