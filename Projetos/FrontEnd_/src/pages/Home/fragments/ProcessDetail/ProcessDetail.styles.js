import { styled } from "@material-ui/core/styles";
import { Card, Typography, Button } from "@material-ui/core";

export const ProcessDetailWrapper = styled(Card)(({ theme }) => ({
  width: "100%",
  position: "relative",
  padding: theme.spacing(2),
}));

export const ImgClose = styled("img")(({ theme }) => ({
  cursor: "pointer",
  position: "absolute",
  right: theme.spacing(3),
  top: theme.spacing(3),
}));

export const TitleStyled = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export const DivStyled = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const TopStyled = styled(DivStyled)(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(1),
}));

export const ImgStyled = styled("img")(({ theme }) => ({
  height: "120px",
  width: "120px",
  marginRight: theme.spacing(3),
}));

export const TopContentStyled = styled(DivStyled)({
  display: "flex",
  width: "100%",
  flexWrap: "wrap",
});

export const ProcessNumberStyled = styled(DivStyled)(({ theme }) => ({
  marginRight: theme.spacing(4),
}));

export const SubjectStyled = styled(DivStyled)(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: "100%",
}));

export const InterestedStyled = styled(TopContentStyled)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: "45%",
  },
}));

export const ButtonsWrapper = styled(DivStyled)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginTop: theme.spacing(3),
  marginBottom: "0",
}));

export const ButtonStyled = styled(Button)(({ theme }) => ({
  width: '136px',
  marginLeft: theme.spacing(1),
}));
