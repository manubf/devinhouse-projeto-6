import { styled } from "@material-ui/core/styles";
import { Paper, InputBase, IconButton, Typography, Button } from "@material-ui/core"

export const PaperStyled = styled(Paper)(({ theme }) => ({
  display: "flex",
  padding: '2px 4px',
  width: '70%',
  alignItems: 'center',
  margin: theme.spacing(1),
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  
  [theme.breakpoints.up("md")]: {
    width: '364px',
    margin: '0 50px',
    marginBottom: theme.spacing(1),
  },
}));

export const AutocompleteWrapper = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
  
  [theme.breakpoints.up("md")]: {
    margin: '0 50px',
    marginBottom: theme.spacing(1),
  },
}));

export const InputBaseStyled = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
}));

export const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(1),
}));

export const SwitchWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  with: '100%',
  alignItems: 'center'
}));

export const TextStyled = styled(Typography)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(1),
  textAlign: 'center',
  
  [theme.breakpoints.up("md")]: {
    width: '30%',
  },
}));

export const TopStyled = styled('div')(({ theme }) => ({
  display: "flex",
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  padding: "12px 0 24px",
  
  [theme.breakpoints.up("md")]: {
    padding: "12px 100px 24px",
    width: '100%',
    flexWrap: 'nowrap',
  },
}));

export const ButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  
}));
