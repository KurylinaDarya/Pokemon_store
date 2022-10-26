import { memo, useEffect } from "react";
import { useSelector } from "react-redux";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import iconCart from "../../static/img/iconCart.png";
import { useCart } from "../../hooks/useCart";
import { isAuthSelector } from "../../selectors/index";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    color: "#000",
    background: "#fed61b",
  },
}));

const IconCart = () => {
  const { cart, handleGetCartInfo } = useCart();

  const isAuth = useSelector(isAuthSelector);

  useEffect(() => {
    if (isAuth) {
      handleGetCartInfo();
    }
  }, [isAuth, handleGetCartInfo]);

  return (
    <StyledBadge badgeContent={cart.quantity === 0 ? null : cart.quantity}>
      <img src={iconCart} alt="LogoCart" />
    </StyledBadge>
  );
};

export default memo(IconCart);
