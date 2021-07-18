import { styled } from "@material-ui/core/styles";

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
