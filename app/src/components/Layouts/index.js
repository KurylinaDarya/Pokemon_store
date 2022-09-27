import React from "react";
import Header from "../Header/index";
import Footer from "../Footer/index";

import styles from "./styles.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
