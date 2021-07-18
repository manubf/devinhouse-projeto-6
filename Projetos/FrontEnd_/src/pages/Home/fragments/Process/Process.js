import { Typography } from "@material-ui/core";
import {
  ProcessWrapper,
  ImgStyled,
  DivStyled,
  InterestedStyled,
  TextStyled,
  TitleStyled,
  DescriptionStyled,
} from "./Process.styles";
import processImg from "../../../../assets/process-fake.png";

export function Process({ process, setDetail, detail }) {
  const { numero, descricao, assunto, interessados } = process;

  return (
    <ProcessWrapper
      onClick={() =>
        setDetail({
          appears: !detail?.appears, // true
          processClicked: process,
        })
      }
      appears={detail?.appears?.toString()}
    >
      <ImgStyled
        alt="processo"
        src={processImg}
        appears={detail?.appears?.toString()}
      />

      <DivStyled appears={detail.appears?.toString()}>
        <TitleStyled variant="h3">Número</TitleStyled>
        <Typography>{numero}</Typography>
      </DivStyled>

      <DivStyled appears={detail.appears?.toString()}>
        <TitleStyled variant="h3">Assunto</TitleStyled>
        <TextStyled>{assunto}</TextStyled>
      </DivStyled>

      <InterestedStyled appears={detail.appears?.toString()}>
        <TitleStyled variant="h3">Interessado</TitleStyled>
        <Typography>{interessados[0]}</Typography>
      </InterestedStyled>

      <DescriptionStyled appears={detail.appears?.toString()}>
        <TitleStyled variant="h3">Descrição</TitleStyled>
        <TextStyled>{descricao}</TextStyled>
      </DescriptionStyled>
    </ProcessWrapper>
  );
}
