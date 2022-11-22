import { memo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

import { ROUTE_NAMES } from "../../routes/routeNames";

import iconProfile from "../../static/img/iconProfile.png";

import styles from "./styles.module.scss";

const StyledMenu = styled(Menu)(() => ({
  "& .MuiList-root": {
    width: 150,
    display: "flex",
    flexDirection: "column",
    background: "#fff",
  },
}));

const IconProfile = () => {
  const userName = useSelector((state) => state.auth.data);

  const handleLogoutInProfile = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <div>
          <div className={styles.profile} {...bindTrigger(popupState)}>
            <img src={iconProfile} alt="profile" />
            {userName.firstName} {userName.lastName}
          </div>
          <StyledMenu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>
              <NavLink className={styles.navlink} to={ROUTE_NAMES.PROFILE}>
                Profile
              </NavLink>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <NavLink
                className={styles.navlink}
                onClick={handleLogoutInProfile}
                to={ROUTE_NAMES.HOME}
              >
                Logout
              </NavLink>
            </MenuItem>
          </StyledMenu>
        </div>
      )}
    </PopupState>
  );
};

export default memo(IconProfile);
