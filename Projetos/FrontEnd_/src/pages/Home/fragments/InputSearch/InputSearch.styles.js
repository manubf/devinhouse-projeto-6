import { styled } from "@material-ui/core/styles";
import { Paper, InputBase, IconButton } from "@material-ui/core"

export const PaperStyled = styled(Paper)(({ theme }) => ({
  display: "flex",
  padding: '2px 4px',
  
  width: '464px',
  alignItems: 'center',
  margin: '10px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  
  [theme.breakpoints.up("md")]: {
    width: '100%',
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

