import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Profile from "../components/index";

import { userInfoSelector } from "../../../selectors/index";
import { orderIsLoading, orderSelector } from "../../../selectors/index";

import { getOrders } from "../../Cart/thunks";

import { ROUTE_NAMES } from "../../../routes/routeNames";

const ProfileContainer = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userInfo = useSelector(userInfoSelector);

  const orders = useSelector(orderSelector);

  const isLoading = useSelector(orderIsLoading);

  const handleNavigateOrderHistoryDetail = useCallback(
    (id) => {
      navigate(`${ROUTE_NAMES.PROFILE}/${id}`);
    },
    [navigate]
  );

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <Profile
      orders={orders}
      userInfo={userInfo}
      isLoading={isLoading}
      onNavigateOrderHistoryDetail={handleNavigateOrderHistoryDetail}
    />
  );
};

export default ProfileContainer;
