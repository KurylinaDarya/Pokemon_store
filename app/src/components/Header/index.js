import { Link } from "react-router-dom";

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
        <Link className={styles.menuItem} to={ROUTE_NAMES.SIGN_UP}>
          Registration
        </Link>
        <Link className={styles.menuItem} to={ROUTE_NAMES.SIGN_IN}>
          Authorization
        </Link>
      </div>

      <div className={styles.logoBasket}>
        <img src={icons} alt="Logo" />
      </div>
    </div>
  );
};

export default Header;
