import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { SuccessScreen } from "./components/SuccessScreen";
import { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { getInitialBorder, getInitialMode } from "./utils/themes-management";
import { Theme } from "./styles/globalStyles";

function App() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [darkMode, setDarkMode] = useState(getInitialMode());
  const [rounded, setRounded] = useState(getInitialBorder());

  const body = document.getElementsByTagName("body")[0];
  const mode = darkMode ? "darkMode" : "lightMode";
  const border = rounded ? "rounded" : "cornered";

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
    body.style.setProperty("--bg-color", Theme[mode].colors.bgPrimary);
    body.style.setProperty("--text-color", Theme[mode].colors.text);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("rounded", JSON.stringify(rounded));
  }, [rounded]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const pagination = {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  };

  return (
    <div className="App">
      <PersistGate persistor={persistor}>
        <Router>
          <Route path="/">
            <Header
              mode={mode}
              darkMode={darkMode}
              rounded={rounded}
              border={border}
              setDarkMode={setDarkMode}
              setRounded={setRounded}
            />
          </Route>
          <Route exact path="/">
            <Dashboard
              pagination={pagination}
              darkMode={mode}
              rounded={border}
            />
          </Route>
          <Route exact path="/cart">
            <Cart darkMode={mode} rounded={border} />
          </Route>
          <Route exact path="/thanks">
            <SuccessScreen darkMode={mode} rounded={border} />
          </Route>
          <Route exact path="/">
            <Footer pagination={pagination} darkMode={mode} rounded={border} />
          </Route>
        </Router>
      </PersistGate>
    </div>
  );
}

export default App;
