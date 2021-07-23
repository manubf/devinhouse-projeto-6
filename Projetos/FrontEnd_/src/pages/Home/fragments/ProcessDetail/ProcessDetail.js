import { useState } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Typography } from "@material-ui/core";
import {
  ProcessDetailWrapper,
  ImgClose,
  TitleStyled,
  DivStyled,
  TopStyled,
  ImgStyled,
  TopContentStyled,
  ProcessNumberStyled,
  SubjectStyled,
  InterestedStyled,
  ButtonsWrapper,
  ButtonStyled,
} from "./ProcessDetail.styles";

import processImg from "../../../../assets/process-fake.png";
import closeIcon from "../../../../assets/close.png";

import { AlertDialog, MessageAlert } from "../../../../components";
import { useAxios } from "../../../../utils/hooks";

export function ProcessDetail({ setDetail, setOpen, setProcessos, processToEdit }) {
  const [loading, setLoading] = useState(true);
  const [openMessage, setOpenMessage] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  console.log(processToEdit)

  const { getEndpoint, deleteEndpoint } = useAxios();

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  const removeProcess = () => {
    deleteEndpoint(`/processos/${processToEdit.id}`).then(() => {
      setDetail({
        processClicked: undefined,
        appears: false,
      });
      setOpenMessage(true);
    })
    getEndpoint(`/processos`).then((response) => {
      setProcessos(response)
    });
  };

  return (
    <>
      <ProcessDetailWrapper>
        <ImgClose
          alt="close"
          src={closeIcon}
          onClick={() =>
            setDetail({
              processClicked: undefined,
              appears: false,
            })
          }
        />

        <TopStyled>
          <div>
            {loading ? (
              <Skeleton
                animation="wave"
                variant="circle"
                width={120}
                height={120}
                style={{ marginRight: 24 }}
              />
            ) : (
              <ImgStyled alt="processo" src={processImg} />
            )}
          </div>

          <TopContentStyled>
            {loading ? (
              <>
                <SubjectStyled>
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                </SubjectStyled>
                <SubjectStyled>
                  <Skeleton animation="wave" />
                  <Skeleton animation="wave" />
                </SubjectStyled>
              </>
            ) : (
              <>
                <ProcessNumberStyled>
                  <TitleStyled variant="h3">Nº do Processo</TitleStyled>
                  <Typography>{processToEdit?.nuProcesso}</Typography>
                </ProcessNumberStyled>

                <ProcessNumberStyled>
                  <TitleStyled variant="h3">Ano</TitleStyled>
                  <Typography>{processToEdit?.nuAno}</Typography>
                </ProcessNumberStyled>

                <div>
                  <TitleStyled variant="h3">Órgão/Setor</TitleStyled>
                  <Typography>{processToEdit?.sgOrgaoSetor?.toUpperCase()}</Typography>
                </div>

                <SubjectStyled>
                  <TitleStyled variant="h3">Assunto</TitleStyled>
                  <Typography>{processToEdit?.cdAssunto?.descricao}</Typography>
                </SubjectStyled>
              </>
            )}
          </TopContentStyled>
        </TopStyled>

        {!loading && (
          <DivStyled>
            <TitleStyled variant="h3">Interessado</TitleStyled>
            <InterestedStyled>
              <Typography>{processToEdit?.cdInteressado?.nmInteressado}</Typography>
            </InterestedStyled>
          </DivStyled>
        )}

        <div className="description">
          <TitleStyled variant="h3">
            {loading ? <Skeleton animation="wave" /> : "Descrição"}
          </TitleStyled>
          <Typography>
            {loading ? <Skeleton animation="wave" /> : processToEdit?.descricao}
          </Typography>
        </div>

        <ButtonsWrapper>
          <ButtonStyled
            variant="outlined"
            onClick={() => setOpenAlert(true)}
            className="remove"
          >
            Remover
          </ButtonStyled>
          <ButtonStyled
            variant="outlined"
            onClick={() => setOpen(true)}
            color="primary"
          >
            Editar
          </ButtonStyled>
        </ButtonsWrapper>
      </ProcessDetailWrapper>

      <MessageAlert
        openMessage={openMessage}
        setOpenMessage={setOpenMessage}
        message="Processo deletado com sucesso!"
      />
      

      <AlertDialog
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
        title="Deletar processo"
        text="A ação não pode ser desfeita. Tem certeza que deseja deletar este processo?"
        confirmAction={removeProcess}
      />
    </>
  );
}
