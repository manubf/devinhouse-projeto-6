import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function MessageAlert({
  openMessage,
  setOpenMessage,
  message,
  severity,
  
}) {
  return (
    <Snackbar
      open={openMessage}
      autoHideDuration={4000}
      onClose={() => setOpenMessage(false)}
    >
      <Alert
        onClose={() => setOpenMessage(false)}
        severity={severity ? severity : "success"}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
