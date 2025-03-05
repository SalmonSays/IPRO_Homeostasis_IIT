import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Navbar, NotFound } from "../../components";
import { getPathMapping, stringToSlug } from "../../utils";
import { useEffect } from "react";

const App = () => {
  const pathMapping = getPathMapping();
  const currentPath =
    location.pathname
      .split(`${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`)
      .pop() || "/";

  // Set Page Title
  const title =
    currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [title]);

  return (
    <>
      <Navbar />
      <Routes>
        {Object.entries(pathMapping).map(
          ([path, { component: Component }]) => (
            <Route
              key={path}
              path={path}
              element={
                <div className="container">
                  <Component />
                </div>
              }
            />
          ),
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;