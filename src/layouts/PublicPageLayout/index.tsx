import styles from "./PublicPageLayout.module.scss";
import { Navbar, Footer } from "../../Components";
import { Outlet } from "react-router-dom";

const PublicPageLayout = () => {
  return (
    <>
      <div className={styles.PublicPageLayout}>
        <div className={styles.main_container}>
          <div className={styles.Navbar_container}>
            <div className={styles.Navbar_Child_Container}>
              <Navbar />
            </div>
          </div>
          <div className={styles.Outlet_container}>
            <div className={styles.Outlet_Child_Container}>
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PublicPageLayout;
