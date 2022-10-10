import fb from "../../static/img/fb.png";
import tw from "../../static/img/tw.png";
import link from "../../static/img/link.png";
import inst from "../../static/img/inst.png";

import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div>
          <img className={styles.link} src={fb} alt="facebook" />
          <img className={styles.link} src={tw} alt="twitter" />
          <img className={styles.link} src={link} alt="linkedin" />
          <img className={styles.link} src={inst} alt="instagram" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
