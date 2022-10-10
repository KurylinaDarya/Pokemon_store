import { memo } from "react";
import { Link } from "react-router-dom";

import SignInContainer from "../../pages/SignIn/containers/SignInContainer";

import { ROUTE_NAMES } from "../../router/routeNames";

import logo from "../../static/img/logo.png";
import icons from "../../static/img/icons.png";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link className={styles.logoLink} to={ROUTE_NAMES.HOME}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className={styles.menu}>
        <SignInContainer className={styles.menuItem} />
      </div>

      <div className={styles.logoBasket}>
        <img src={icons} alt="Logo" />
      </div>
    </div>
  );
};

export default memo(Header);
