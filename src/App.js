import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import get from "lodash/get";

import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import GetLinkPage from "./pages/GetLinkPage";
import { alertClear } from "./actions";

function App({ message, error, alertClear }) {
  console.log({ error });
  useEffect(() => {
    if (message) {
      toast.success(message);
    }

    if (error) {
      toast.error(error);
    }

    alertClear();
  }, [message, error]);

  useEffect(() => {
    alertClear();
  }, [alertClear]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/register">
          <RegisterPage />
        </Route>

        <Route path="/:shortenName">
          <GetLinkPage />
        </Route>
      </Switch>

      <ToastContainer />
    </Router>
  );
}

const mapStateToProps = (state) => ({
  message: get(state, "alert.message", ""),
  error: get(state, "alert.error", ""),
});

const mapDispatchToProps = (dispatch) => ({
  alertClear: () => dispatch(alertClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
