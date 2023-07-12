import styles from "./SignupPage.module.scss";
import { AnimatedFadeInPage } from "../../utils";

const SignupPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.SplashPage}>SignupPage</main>
      </AnimatedFadeInPage>
    </>
  );
};

export default SignupPage;
