import { useState, useEffect } from "react";

import { Close } from "@material-ui/icons";
import { Typography, Button, Dialog, DialogTitle, DialogActions, MenuItem } from "@material-ui/core";
import { CloseIcon, DialogContentStyled } from "./CreateEditProcess.styles";

// import ProcessoService from "../../service";
import { currentYear, today } from "./constants";

import { MessageAlert } from "../../../../components";
import { AddInterested } from "./fragments";

import { Field, Form, Formik } from "formik";
import { useAxios } from "../../../../utils/hooks";
import { TextField } from "formik-material-ui";

import { formValidationSchema } from "../../../../utils/validations";

export function CreateEditProcess({ open, setOpen, processToEdit, setProcessos, setDetail }) {
	const { getEndpoint } = useAxios();
	const [subjectList, setSubjectList] = useState([]);
	const [interestedList, setInterestedList] = useState([]);

	useEffect(() => {
		getEndpoint(`/assuntos`).then((response) => setSubjectList(response));
		getEndpoint(`/interessados`).then((response) => setInterestedList(response));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [inputsForm, setInputsForm] = useState({
		assunto: processToEdit ? processToEdit.cdAssunto.descricao : "",
		interessado: processToEdit ? processToEdit.cdInteressado.nmInteressado : "",
		descricao: processToEdit ? processToEdit.descricao : "",
		sgOrgaoSetor: processToEdit ? processToEdit.sgOrgaoSetor : "",
		nuAno: processToEdit ? processToEdit.nuAno : currentYear,
	});
	const [alert, setAlert] = useState(false);

	useEffect(() => {
		if (processToEdit) {
			setInputsForm({
				assunto: processToEdit.cdAssunto.descricao,
				interessado: processToEdit.cdInteressado.nmInteressado,
				descricao: processToEdit.descricao,
			});
		}

		return () =>
			setInputsForm({
				assunto: "",
				interessado: "",
				descricao: "",
			});
	}, [processToEdit]);

	// const [tempInterested, setTempInterested] = useState("");

	// const handleChangeInput = (event) => {
	// 	const { value, name } = event.target;
	// 	setInputsForm({ ...inputsForm, [name]: value });
	// };

	// const saveProcess = () => {
	// 	const { assunto, interessado, descricao } = inputsForm;
	// 	const numero = `SOFT 2021/${Math.ceil(Math.random() * (1 - 99999) + 99999)}`;
	// 	if (processToEdit) {
	// 		const itemToEdit = {
	// 			descricao,
	// 			assunto,
	// 			interessado,
	// 		};
	// 		setInputsForm({
	// 			descricao,
	// 			assunto,
	// 			interessado,
	// 		});
	// 		// ProcessoService.editaProcesso(processToEdit.id, itemToEdit).then(() =>
	// 		//   ProcessoService.buscaProcessos().then((response) =>
	// 		//     setProcessos(response)
	// 		//   )
	// 		// );
	// 		setDetail(false);
	// 	} else {
	// 		const item = {
	// 			entrada: today,
	// 			numero,
	// 			descricao,
	// 			assunto,
	// 			interessado,
	// 		};
	// 		// ProcessoService.adicionaProcesso(item).then(() =>
	// 		//   ProcessoService.buscaProcessos().then((response) =>
	// 		//     setProcessos(response)
	// 		//   )
	// 		// );
	// 		setAlert(true);
	// 	}

	// 	setOpen(false);
	// };

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
				<DialogTitle style={{ padding: "16px 20px 0" }}>Cadastro de processo</DialogTitle>

				<Formik
					initialValues={inputsForm}
					enableReinitialize={true}
					validationSchema={formValidationSchema}
					onSubmit={(values, { setSubmitting }) => {
						window.alert(JSON.stringify(values, null, 2));

						if (processToEdit) {
							// enviar dados para editar
							// setDetail(false);
						} else {
							// enviar dados para adicionar
							// setAlert(true);
						}

						// setOpen(false);
						setSubmitting(false);
					}}
				>
					{({ submitForm, isSubmitting, isValid }) => (
						<Form>
							<DialogContentStyled>
								<Typography variant="body2">Assunto</Typography>
								<Field
									select
									component={TextField}
									color="secondary"
									name="assunto"
									// required
								>
									{subjectList?.map((subject) => (
										<Field //
											component={MenuItem}
											key={subject.id}
											value={subject.id}
										>
											{subject.descricao}
										</Field>
									))}
								</Field>

								<Typography variant="body2">Interessado</Typography>
								<Field
									select
									component={TextField}
									color="secondary"
									name="interessado"
									// required
								>
									{interestedList?.map((interested) => (
										<Field //
											component={MenuItem}
											key={interested.id}
											value={interested.id}
										>
											{interested.nmInteressado}
										</Field>
									))}
								</Field>

								<Typography variant="body2">Descrição</Typography>
								<Field
									component={TextField}
									name="descricao"
									variant="outlined"
									multiline
									// required
								/>

								<Typography variant="body2">Sigla Órgão Setor</Typography>
								<Field
									select
									component={TextField}
									color="secondary"
									name="sgOrgaoSetor"
									// required
								>
									{["SOFT", "DVHS", "RDST"]?.map((item) => (
										<Field //
											component={MenuItem}
											key={item}
											value={item}
										>
											{item}
										</Field>
									))}
								</Field>

								<Typography variant="body2">Ano</Typography>
								<Field
									component={TextField}
									name="nuAno"
									variant="outlined"
									// required
									type="number"
									// max="2021"
								/>

								<DialogActions>
									<Button
										onClick={submitForm}
										disabled={isSubmitting || !isValid}
										variant="contained"
										color="primary"
									>
										Salvar
									</Button>
								</DialogActions>
							</DialogContentStyled>
						</Form>
					)}
				</Formik>
			</Dialog>

			<MessageAlert alert={alert} setAlert={setAlert} message="Processo cadastrado com sucesso!" />
		</>
	);
}
