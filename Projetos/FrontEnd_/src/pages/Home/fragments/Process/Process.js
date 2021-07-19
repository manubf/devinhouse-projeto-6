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
import Skeleton from "@material-ui/lab/Skeleton";

import processImg from "../../../../assets/process-fake.png";

export function Process({ process, setDetail, detail, loading }) {
  const { nuProcesso, descricao, cdAssunto, cdInteressado } = process;

  return (
    <ProcessWrapper
      onClick={() =>
        setDetail({
          appears: true,
          processClicked: process,
        })
      }
      appears={detail?.appears}
    >
      {loading ? (
        <Skeleton
          animation="wave"
          variant="circle"
          width={!detail?.appears ? 84 : 0}
          height={!detail?.appears ? 84 : 0}
          style={{ marginRight: 16 }}
        />
      ) : (
        <ImgStyled alt="processo" src={processImg} appears={detail?.appears} />
      )}

      <DivStyled appears={detail.appears}>
        <TitleStyled variant="h3">
          {loading ? <Skeleton animation="wave" /> : "Número"}
        </TitleStyled>
        <Typography>{loading ? <Skeleton animation="wave" /> : nuProcesso}</Typography>
      </DivStyled>

      <DivStyled appears={detail.appears}>
        <TitleStyled variant="h3">
          {loading ? <Skeleton animation="wave" /> : "Assunto"}{" "}
        </TitleStyled>
        <TextStyled>{loading ? <Skeleton animation="wave" /> : cdAssunto?.descricao}</TextStyled>
      </DivStyled>

      <InterestedStyled appears={detail.appears}>
        <TitleStyled variant="h3">
          {loading ? <Skeleton animation="wave" /> : "Interessado"}
        </TitleStyled>
        <Typography>{loading ? <Skeleton animation="wave" /> : cdInteressado?.nmInteressado}</Typography>
      </InterestedStyled>

      <DescriptionStyled appears={detail.appears}>
        <TitleStyled variant="h3">
          {loading ? <Skeleton animation="wave" /> : "Descrição"}
        </TitleStyled>
        <TextStyled>{loading ? <Skeleton animation="wave" /> : descricao}</TextStyled>
      </DescriptionStyled>
    </ProcessWrapper>
  );
}
