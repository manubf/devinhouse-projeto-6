import { BrowserRouter as Router, Redirect } from "react-router-dom";

import { PrivateRoute } from "./utils";
import { Home } from "../pages";
import { useKeycloak } from "@react-keycloak/web";

export const AppRouter = () => {
	const { keycloak } = useKeycloak();
	console.log("AppRouter => keycloak =", keycloak);

	return (
		<Router>
			<Redirect from="/" to="/home" />
			<PrivateRoute path="/home" component={Home} />
		</Router>
	);
};
