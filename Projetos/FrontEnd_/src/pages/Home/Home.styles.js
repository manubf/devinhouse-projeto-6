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

export const TopStyled = styled('div')(({ theme }) => ({
  display: "flex",
  flexWrap: 'wrap',
  alignItems: 'center',
  
  [theme.breakpoints.up("md")]: {
    flexWrap: 'nowrap',
  },
}));

export const TextStyled = styled(Typography)(({ theme }) => ({
  width: '118px',

  [theme.breakpoints.up("md")]: {
    width: '50%',
    marginBottom: '10px',
    textAlign: 'center',
  },
}));

export const ButtonStyled = styled(Button)(({ theme }) => ({
  width: '118px',
  // height: '49px',
  // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  color: '#757575',

  [theme.breakpoints.up("md")]: {
    width: '50%',
    margin: '5px auto 10px',
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
  marginBottom: '20px', //
  
  [theme.breakpoints.up("md")]: {
    marginLeft: '30px',
  },
}));
