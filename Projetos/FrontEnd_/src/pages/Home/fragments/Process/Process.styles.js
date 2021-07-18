import { styled } from "@material-ui/core/styles";
import { Card, Typography } from "@material-ui/core";

export const ProcessWrapper = styled(({ appears, ...other }) => (
  <Card {...other} />
))(({ theme }) => ({
  marginBottom: theme.spacing(4),
  padding: theme.spacing(2),
  display: "flex",
  flexWrap: "wrap",
}));

export const ImgStyled = styled(({ appears, ...other }) => (
  <img {...other} alt="" />
))(({ theme }) => ({
  alignSelf: "center",
  width: "84px",
  height: "84px",
  marginRight: theme.spacing(2),
  display: (props) => !!props.appears && "none",
}));

export const DivStyled = styled(({ appears, ...other }) => <div {...other} />)(
  ({ theme }) => ({
    marginTop: (props) => (!!props.appears ? "10px" : "30px"), //
    marginRight: theme.spacing(2),
    width: "100%",

    [theme.breakpoints.up("md")]: {
      width: (props) => (!!props.appears ? "42%" : "19%"),
    },
  })
);

export const InterestedStyled = styled(({ appears, ...other }) => (
  <DivStyled {...other} />
))({
  width: (props) => (!!props.appears ? "90%" : "20%"),
});

export const DescriptionStyled = styled(({ appears, ...other }) => (
  <DivStyled {...other} />
))({
  display: (props) => !!props.appears && "none",
});

export const TitleStyled = styled(({ appears, ...other }) => (
  <Typography {...other} />
))(({ theme }) => ({
  marginBottom: (props) => !props.appears && theme.spacing(2),

  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(1),
  },
}));

export const TextStyled = styled(({ appears, ...other }) => (
  <Typography {...other} />
))(({ theme }) => ({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: (props) => (!!props.appears ? "15vw" : "18vw"),

  [theme.breakpoints.up("md")]: {
    maxWidth: "100%",
  },
}));
