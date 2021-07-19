import { useState, useEffect } from "react";
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

// import ProcessoService from "../../service";

import processImg from "../../../../assets/process-fake.png";
import closeIcon from "../../../../assets/close.png";

import { AlertDialog, MessageAlert } from "../../../../components";

export function ProcessDetail({ id, setDetail, setOpen, setProcessos }) {
  const [loading, setLoading] = useState(true);
  const [process, setProcess] = useState({});
  const [openMessage, setOpenMessage] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => {
    // setLoading(true);
    // ProcessoService.buscaProcesso(id).then((response) => {
    setLoading(false);
    //   setProcess(response);
    // });
  }, [id]);

  const removeProcess = () => {
    
    // ProcessoService.deletaProcesso(id)
    //   .then(() => {
      //     ProcessoService.buscaProcessos().then((response) => {
        //       setProcessos(response);
        //     });
        //   })
        //   .then(() =>
        // setDetail({
          //   processClicked: undefined,
          //   appears: false,
          // });
          //   );
    setOpenMessage(true);
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
                  <TitleStyled variant="h3">Processo</TitleStyled>
                  <Typography variant="h2">{process?.numero}</Typography>
                </ProcessNumberStyled>

                <div>
                  <TitleStyled variant="h3">Data</TitleStyled>
                  <Typography variant="h2">{process?.entrada}</Typography>
                </div>
                <SubjectStyled>
                  <TitleStyled variant="h3">Assunto</TitleStyled>
                  <Typography variant="h2">{process?.assunto}</Typography>
                </SubjectStyled>
              </>
            )}
          </TopContentStyled>
        </TopStyled>

        {!loading && (
          <DivStyled>
            <TitleStyled variant="h3">Interessados</TitleStyled>
            <InterestedStyled>
              {process?.interessados?.map((item, index) => (
                <Typography key={index}>{item}</Typography>
              ))}
            </InterestedStyled>
          </DivStyled>
        )}

        <div className="description">
          <TitleStyled variant="h3">
            {loading ? <Skeleton animation="wave" /> : "Descrição"}
          </TitleStyled>
          <Typography>
            {loading ? <Skeleton animation="wave" /> : process?.descricao}
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
