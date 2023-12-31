import styles from "./LoadingScreen.module.scss";
import ClipLoader from "react-spinners/ClipLoader";

type LoadingScreenProps = {
  loading: boolean;
};

const LoadingScreen = ({ loading }: LoadingScreenProps) => {
  //ClipLoader Styles
  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <>
      <div className={styles.LoadingScreen}>
        <ClipLoader
          color={"#2e70cb"}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
};

export default LoadingScreen;
