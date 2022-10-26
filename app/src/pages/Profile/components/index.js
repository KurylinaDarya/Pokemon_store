// import CustomPaginationActionsTable from "../OrdersHistory";
import { Link } from "react-router-dom";

import iconProfileBig from "../../../static/img/iconProfileBig.png";

import Spinner from "../../../components/Spinner/index";

import { ROUTE_NAMES } from "../../../routes/routeNames";

import styles from "./styles.module.scss";

const Profile = ({
  userInfo,
  orders,
  isLoading,
  onNavigateOrderHistoryDetail,
}) => {
  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={iconProfileBig} alt="pokenon" />
          </div>

          <div className={styles.personalInfoContainer}>
            <h2 className={styles.title}>Personal Information</h2>
            <div className={styles.infoContainer}>
              <div className={styles.info}>
                <p className={styles.field}>Name</p>
                <p className={styles.field}>Email</p>
                <p className={styles.field}>Gender</p>
                <p className={styles.field}>Telephone Number</p>
              </div>

              <div className={styles.info}>
                <p>
                  {userInfo.firstName} {userInfo.lastName}
                </p>
                <p>{userInfo.email}</p>
                <p>{userInfo.gender}</p>
                <p>{userInfo.phone}</p>
              </div>
            </div>

            {/* <h2 className={styles.subtitle}>Recent Order History</h2> */}

            {/* <div className={styles.orderHistoryContainer}>
              {orders.length ? (
                <CustomPaginationActionsTable
                  orders={orders}
                  onNavigateOrderHistoryDetail={onNavigateOrderHistoryDetail}
                />
              ) : (
                <div>You have no order history</div>
              )}
            </div> */}
          </div>
        </>
      )}
      <Link to={ROUTE_NAMES.SHOP} className={styles.link}>
        Back to store
      </Link>
    </div>
  );
};

export default Profile;
