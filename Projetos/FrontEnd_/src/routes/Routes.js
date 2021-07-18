import { BrowserRouter as Router, Redirect } from "react-router-dom";

import { PrivateRoute } from "./utils";
import { Home } from "../pages";

export const AppRouter = () => (
  <Router>
    <Redirect from="/" to="/home" />
    <PrivateRoute path="/home" component={Home} />
  </Router>
);
