import { styled } from "@material-ui/core/styles";
import { Paper, InputBase, IconButton } from "@material-ui/core"

export const PaperStyled = styled(({ margininput, ...other }) => (
  <Paper {...other} />
))(({ theme }) => ({
  display: "flex",
  margin: props => props.margininput,
  width: '464px',
  padding: '2px 4px',
  alignItems: 'center',
  
  [theme.breakpoints.up("md")]: {
    width: '100%',
    margin: '0',
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

