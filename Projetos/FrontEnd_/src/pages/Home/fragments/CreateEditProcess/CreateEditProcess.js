import { useState, useEffect } from "react";

import { Close } from "@material-ui/icons";
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  TextField,
} from "@material-ui/core";
import { CloseIcon, DialogContentStyled } from "./CreateEditProcess.styles";

// import ProcessoService from "../../service";
import { today } from "./constants";

import { MessageAlert } from "../../../../components";
import { AddInterested } from './fragments'

export function CreateEditProcess({ open, setOpen, processToEdit, setProcessos, setDetail }) {
  const [inputs, setInputs] = useState({
    assunto: processToEdit ? processToEdit.cdAssunto.descricao : "",
    interessado: processToEdit ? processToEdit.cdInteressado.nmInteressado : "",
    descricao: processToEdit ? processToEdit.descricao : "",
  });
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (processToEdit) {
      setInputs({
        assunto: processToEdit.cdAssunto.descricao,
        interessado: processToEdit.cdInteressado.nmInteressado,
        descricao: processToEdit.descricao,
      });
    }

    return () =>
      setInputs({
        assunto: "",
        interessado: "",
        descricao: "",
      });
  }, [processToEdit]);

  const [tempInterested, setTempInterested] = useState("");

  const handleChangeInput = (event) => {
    const { value, name } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const saveProcess = () => {
    const { assunto, interessado, descricao } = inputs;
    const numero = `SOFT 2021/${Math.ceil(
      Math.random() * (1 - 99999) + 99999
    )}`;
    if (processToEdit) {
      const itemToEdit = {
        descricao,
        assunto,
        interessado,
      };
      setInputs({
        descricao,
        assunto,
        interessado,
      });
      // ProcessoService.editaProcesso(processToEdit.id, itemToEdit).then(() =>
      //   ProcessoService.buscaProcessos().then((response) =>
      //     setProcessos(response)
      //   )
      // );
      setDetail(false)
      
    } else {
      const item = {
        entrada: today,
        numero,
        descricao,
        assunto,
        interessado,
      };
      // ProcessoService.adicionaProcesso(item).then(() =>
      //   ProcessoService.buscaProcessos().then((response) =>
      //     setProcessos(response)
      //   )
      // );
      setAlert(true);
    }

    setOpen(false);
  };

  return (
    <>
      <Dialog
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <CloseIcon aria-label="close" onClick={() => setOpen(false)}>
            <Close />
          </CloseIcon>
        </div>
        <DialogTitle style={{ padding: "16px 20px 0" }}>
          Cadastro de processo
        </DialogTitle>

        <DialogContentStyled>
          <Typography variant="body2">Assunto</Typography>
            <TextField
              color="secondary"
              value={inputs.assunto}
              name="assunto"
              onChange={handleChangeInput}
            />

          <Typography variant="body2">Interessado</Typography>
            <TextField
              color="secondary"
              value={inputs.interessado}
              name="interessado"
              onChange={handleChangeInput}
            />

          {/* <AddInterested
            inputs={inputs}
            setInputs={setInputs}
            tempInterested={tempInterested}
            setTempInterested={setTempInterested}
          /> */}

          <Typography variant="body2">Descrição</Typography>
          <TextField
            color="secondary"
            multiline
            value={inputs.descricao}
            name="descricao"
            onChange={handleChangeInput}
          />

          <DialogActions>
            <Button onClick={saveProcess} variant="contained" color="primary">
              Salvar
            </Button>
          </DialogActions>
        </DialogContentStyled>
      </Dialog>

      <MessageAlert
        alert={alert}
        setAlert={setAlert}
        message="Processo cadastrado com sucesso!"
      />
    </>
  );
}

