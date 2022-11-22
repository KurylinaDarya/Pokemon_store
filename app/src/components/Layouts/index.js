import Header from "../Header/index";
import Footer from "../Footer/index";

import styles from "./styles.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
