import { styled } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core"

export const ContentWrapper = styled(({ appears, ...other }) => (
  <div {...other} />
))(({ theme }) => ({
  display: "flex",
  margin: "0 20px",
  flexDirection: "column-reverse",
  
  [theme.breakpoints.up("md")]: {
    margin: (props) => (props.appears ? "0 50px" : "0 120px"),
    flexDirection: "row",
  },
}));

export const MessageWrapper = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
  width: '100%',
}));

export const TopStyled = styled('div')(({ theme }) => ({
  display: "flex",
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  
  [theme.breakpoints.up("md")]: {
    padding: "12px 100px",
    width: '100%',
    flexWrap: 'nowrap',
  },
}));

export const TextStyled = styled(Typography)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(1),
  textAlign: 'center',
  
  [theme.breakpoints.up("md")]: {
    width: '30%',
  },
}));

export const ButtonStyled = styled(Button)(({ theme }) => ({
  width: '70%',
  margin: theme.spacing(1),
  
  [theme.breakpoints.up("md")]: {
    width: '30%',
    margin: '0 50px',
    marginBottom: theme.spacing(1),
  },
}));

export const ProcessWrapper = styled(({ appears, ...other }) => (
  <div {...other} />
))(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: "100%",
        
    [theme.breakpoints.up("md")]: {
      width: props => props.appears ? "70%" : "100%",
    },
}));

export const DetailWrapper = styled('div')(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(2),
  
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(4),
  },
}));
