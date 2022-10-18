import { memo } from "react";

import CircularProgress from "@mui/material/CircularProgress";

import styles from "./styles.module.scss";

const Spinner = () => {
  return <CircularProgress color="primary" className={styles.spiner} />;
};

export default memo(Spinner);
