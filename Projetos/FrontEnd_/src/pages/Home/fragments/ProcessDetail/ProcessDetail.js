import { useState, useEffect } from "react";

// import ProcessoService from "../../service";

import { Typography, Button } from "@material-ui/core";
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
} from "./ProcessDetail.styles";

import processImg from "../../../../assets/process-fake.png";
import loadingImg from "../../../../assets/loading2.gif";
import closeIcon from "../../../../assets/close.png";
// import MessageAlert from "../MessageAlert";

export function ProcessDetail({ id, setDetail, setOpen, setProcessos }) {
  const [loading, setLoading] = useState(true);
  const [process, setProcess] = useState({});
  const [alert, setAlert] = useState(false);

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
    setDetail({
      processClicked: undefined,
      appears: false,
    });
    //   );
    setAlert(true);
  };

  return loading ? (
    <img src={loadingImg} alt="loading" />
  ) : (
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
            <ImgStyled alt="processo" src={processImg} />
          </div>

          <TopContentStyled>
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
          </TopContentStyled>
        </TopStyled>

        <DivStyled>
          <TitleStyled variant="h3">Interessados</TitleStyled>
          <InterestedStyled>
            {process?.interessados?.map((item, index) => (
              <Typography key={index}>{item}</Typography>
            ))}
          </InterestedStyled>
        </DivStyled>

        <div className="description">
          <TitleStyled variant="h3">Descrição</TitleStyled>
          <Typography>{process?.descricao}</Typography>
        </div>

        <ButtonsWrapper>
          <Button variant="outlined" onClick={removeProcess} className="remove">
            Remover
          </Button>
          <Button
            variant="outlined"
            onClick={() => setOpen(true)}
            color="primary"
          >
            Editar
          </Button>
        </ButtonsWrapper>
      </ProcessDetailWrapper>

      {/* <MessageAlert
        alert={alert}
        setAlert={setAlert}
        message="Processo deletado com sucesso!"
      /> */}
    </>
  );
}
