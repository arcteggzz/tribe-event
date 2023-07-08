import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//layouts
import { PublicPageLayout } from "./layouts";

//pages
import { SplashPage, HomePage } from "./pages";

//routes
import { routePaths } from "./utils/";

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path={routePaths.SPLASHPAGE} element={<SplashPage />} />

          <Route element={<PublicPageLayout />}>
            <Route path={routePaths.HOMEPAGE} element={<HomePage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
