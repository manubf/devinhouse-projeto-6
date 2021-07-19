import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

export function AlertDialog({
  openAlert,
  setOpenAlert,
  title,
  text,
  confirmAction,
}) {
  const handleClose = () => setOpenAlert(false);

  const handleConfirm = () => {
    setOpenAlert(false);
    confirmAction();
  };

  return (
    <Dialog
      open={openAlert}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
      {text && (
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleConfirm} color="primary" autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
