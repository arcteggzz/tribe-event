import styles from "./SignupPage.module.scss";
import { AnimatedFadeInPage, routePaths } from "../../utils";
import {
  google_icon,
  facebook_transparent_icon,
  add_image_icon,
} from "../../assets/images";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.SignupPage}>
          <form>
            <div className={styles.button_container}>
              <button>Individual</button>
              <button>Organization</button>
            </div>

            <div className={styles.profile_image_container}>
              <div className={styles.input_container}>
                <input type="file" className={styles.file_input} />
              </div>
              <img
                src={add_image_icon}
                alt="add image"
                className={styles.image_placeholder}
              />
            </div>

            <div className={styles.input_label_container}>
              <label htmlFor="firstName">First Name *</label>
              <input type="text" />
            </div>
            <div className={styles.input_label_container}>
              <label htmlFor="lastName">Last Name *</label>
              <input type="text" />
            </div>
            <div className={styles.input_label_container}>
              <label htmlFor="email">Email *</label>
              <input type="email" />
            </div>
            <div className={styles.input_label_container}>
              <label htmlFor="password">Password *</label>
              <input type="password" />
            </div>

            <div className={styles.event_notification_container}>
              <input type="checkbox" />
              <p>
                I’d like to get notifications on the latest events from event
                tribe in my city
              </p>
            </div>

            <button className={styles.signup_button}>Sign Up</button>

            <p>
              By continiung , you agree to{" "}
              <Link to={"#"} className={styles.terms_Conditions_link}>
                our Terms & Conditions Of Service
              </Link>
            </p>

            <button className={styles.google_button}>
              <p>Sign Up with </p>
              <img src={google_icon} alt="Google Icon" />
            </button>

            <button className={styles.facebook_button}>
              <p>Sign Up with </p>
              <img src={facebook_transparent_icon} alt="Facebook Icon" />
            </button>

            <p>
              Already have an account{" "}
              <Link to={routePaths.LOGIN} className={styles.signin_link}>
                Sign In
              </Link>{" "}
            </p>
          </form>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default SignupPage;
