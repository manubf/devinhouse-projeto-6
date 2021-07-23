import { useState, useEffect } from "react";

import { Close } from "@material-ui/icons";
import { Typography, Button, Dialog, DialogTitle, DialogActions, MenuItem } from "@material-ui/core";
import { CloseIcon, DialogContentStyled } from "./CreateEditProcess.styles";

import { MessageAlert } from "../../../../components";

import { Field, Form, Formik } from "formik";
import { useAxios } from "../../../../utils/hooks";
import { TextField } from "formik-material-ui";

import { formValidationSchema, currentYear } from "../../../../utils/validations";

export function CreateEditProcess({ open, setOpen, processToEdit, setProcessos, setDetail }) {
	const { getEndpoint, postEndpoint, putEndpoint } = useAxios();
	const [subjectList, setSubjectList] = useState([]);
	const [interestedList, setInterestedList] = useState([]);

	useEffect(() => {
		getEndpoint(`/assuntos`).then((response) => setSubjectList(response));
		getEndpoint(`/interessados`).then((response) => setInterestedList(response));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [inputsForm, setInputsForm] = useState({
		assunto: processToEdit ? processToEdit.cdAssunto.id : "",
		interessado: processToEdit ? processToEdit.cdInteressado.id : "",
		descricao: processToEdit ? processToEdit.descricao : "",
		sgOrgaoSetor: processToEdit ? processToEdit.sgOrgaoSetor : "",
		nuAno: processToEdit ? Number(processToEdit.nuAno) : currentYear,
	});
	const [alert, setAlert] = useState(false);

	useEffect(() => {
		if (processToEdit) {
			setInputsForm({
				assunto: processToEdit.cdAssunto.id,
				interessado: processToEdit.cdInteressado.id,
				descricao: processToEdit.descricao,
				sgOrgaoSetor: processToEdit.sgOrgaoSetor,
				nuAno: Number(processToEdit.nuAno),
			});
		}

		return () =>
			setInputsForm({
				assunto: "",
				interessado: "",
				descricao: "",
				sgOrgaoSetor: "",
				nuAno: currentYear,
			});
	}, [processToEdit]);

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
						const newValues = {
							...values,
							cdAssuntoId: values.assunto,
							cdInteressadoId: values.interessado,
							nuAno: values.nuAno.toString(),
						};
						console.log("newValues", newValues)

						const functionsToCall = () => {
							setAlert(true);
							setDetail(false);
							setSubmitting(false);
							setOpen(false);
							getEndpoint(`/processos`).then((response) => setProcessos(response));
						};

						if (processToEdit) {
							putEndpoint(`/processos/${processToEdit.id}`, newValues).then(functionsToCall);
						} else {
							postEndpoint("/processos", newValues).then(functionsToCall);
						}
					}}
				>
					{({ submitForm, isSubmitting, isValid }) => (
						<Form>
							<DialogContentStyled>
								<Typography variant="body2">Assunto</Typography>
								<Field select component={TextField} color="secondary" name="assunto">
									{subjectList?.map((subject) => (
										<Field
											component={MenuItem}
											key={subject.id}
											value={subject.id}
										>
											{subject.descricao}
										</Field>
									))}
								</Field>

								<Typography variant="body2">Interessado</Typography>
								<Field select component={TextField} color="secondary" name="interessado">
									{interestedList?.map((interested) => (
										<Field
											component={MenuItem}
											key={interested.id}
											value={interested.id}
										>
											{interested.nmInteressado}
										</Field>
									))}
								</Field>

								<Typography variant="body2">Descrição</Typography>
								<Field component={TextField} name="descricao" variant="outlined" multiline />

								<Typography variant="body2">Órgão/Setor</Typography>
								<Field select component={TextField} color="secondary" name="sgOrgaoSetor">
									{["SOFT", "DVHS", "RDST", "devn", "hous", "DEVI"]?.map((item) => (
										<Field
											component={MenuItem}
											key={item}
											value={item}
										>
											{item}
										</Field>
									))}
								</Field>

								<Typography variant="body2">Ano</Typography>
								<Field component={TextField} name="nuAno" variant="outlined" type="number" />

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

			<MessageAlert openMessage={alert} setOpenMessage={setAlert} message="Processo cadastrado com sucesso!" />
		</>
	);
}
