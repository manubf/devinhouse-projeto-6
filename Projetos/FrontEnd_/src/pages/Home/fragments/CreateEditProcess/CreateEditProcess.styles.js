import { styled } from "@material-ui/core/styles";
import {  IconButton, DialogContent } from "@material-ui/core";

export const CloseIcon = styled(IconButton)({
  position: 'absolute',
  right: '0',
  top: '0',
  color: 'grey',
});

export const DialogContentStyled = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));
