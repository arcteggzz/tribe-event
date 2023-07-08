import styles from "./Navbar.module.scss";
import { useSelector } from "react-redux";
import { selectCurrentUserName } from "../../redux/features/auth/authSlice";

const Navbar = () => {
  const currentUser = useSelector(selectCurrentUserName);

  return (
    <>
      <nav className={styles.Navbar}>
        This is the Navbar
        <p>Your username is {currentUser}</p>
      </nav>
    </>
  );
};

export default Navbar;
