import { styled } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

export const ProcessWrapper = styled(({ appears, ...other }) => (
  <Paper {...other} />
))(({ theme }) => ({
  marginBottom: theme.spacing(4),
  padding: theme.spacing(2),
  display: "flex",
  flexWrap: "wrap",
}));

export const ImgStyled = styled(({ appears, ...other }) => <img {...other} />)({
  alignSelf: "center",
  width: "84px",
  height: "84px",
  marginRight: "16px", //
  display: (props) => props.appears === "true" && "none",
});

export const DivStyled = styled(({ appears, ...other }) => <div {...other} />)(
  ({ theme }) => ({
    marginTop: (props) => (props.appears === "true" ? "10px" : "30px"), //
    marginRight: "16px",
    width: "100%",

    [theme.breakpoints.up("md")]: {
      width: (props) => (props.appears === "true" ? "42%" : "19%"),
    },
  })
);

export const InterestedStyled = styled(({ appears, ...other }) => (
  <DivStyled {...other} />
))({
  width: (props) => (props.appears === "true" ? "90%" : "20%"),
});

export const DescriptionStyled = styled(({ appears, ...other }) => (
  <DivStyled {...other} />
))({
  display: (props) => props.appears === "true" && "none",
});


export const TitleStyled = styled(({ appears, ...other }) => (
  <Typography {...other} />
))(({ theme }) => ({
  marginBottom: (props) => (props.appears === "false" && "14px"),

  [theme.breakpoints.up("md")]: {
    marginBottom: '5px',
  },
}));

export const TextStyled = styled(({ appears, ...other }) => (
  <Typography {...other} />
))(({ theme }) => ({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: (props) => (props.appears === "true" ? "15vw" : "18vw"),

  [theme.breakpoints.up("md")]: {
    maxWidth: "100%",
  },
}));
