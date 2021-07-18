import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { useKeycloak } from "@react-keycloak/web";
import CircularProgress from "@material-ui/core/CircularProgress";
import { SnackbarCloseButton } from "./components";
import { CustomThemeProvider } from "./contexts";
import { AppRouter } from "./routes";
import { BaseLayout } from "./layout";
import "./App.css";

function App() {
  const { initialized } = useKeycloak();

  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <SnackbarProvider
          maxSnack={1}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          autoHideDuration={2000}
          action={(key) => <SnackbarCloseButton key={key} />}
        >
          {!initialized ? (
            <div className="loading">
              <CircularProgress />
            </div>
          ) : (
            <BaseLayout>
              <AppRouter />
            </BaseLayout>
          )}
        </SnackbarProvider>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default App;
