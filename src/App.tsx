import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//layouts
import { PublicPageLayout, CredentialsPageLayout } from "./layouts";

//pages
import { SplashPage, HomePage, SignupPage } from "./pages";

//routes
import { routePaths } from "./utils/";

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path={routePaths.SPLASHPAGE} element={<SplashPage />} />

          {/* public pages */}
          <Route element={<PublicPageLayout />}>
            <Route path={routePaths.HOMEPAGE} element={<HomePage />} />
          </Route>

          {/* Credential pages i.e signup, login, forgot password */}
          <Route element={<CredentialsPageLayout />}>
            <Route path={routePaths.SIGNUP} element={<SignupPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
