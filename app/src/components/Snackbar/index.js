import { memo, useState } from "react";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SnackbarWithAlert = ({ timeAlert, textAlert, severity }) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      autoHideDuration={timeAlert}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        {textAlert}
      </Alert>
    </Snackbar>
  );
};

export default memo(SnackbarWithAlert);
