import * as Yup from "yup";

export const currentYear = new Date().getFullYear();

export const formValidationSchema = () =>
	Yup.object().shape({
		assunto: Yup.string().required("Selecione o assunto"),
		interessado: Yup.string().required("Selecione o interessado"),
		descricao: Yup.string()
			.min(3, "Descrição deve ter pelo menos 3 caracteres")
			.required("Descrição é obrigatória"),
		sgOrgaoSetor: Yup.string().required("Selecione o setor do orgao"),
		nuAno: Yup.number()
			.min(1000, "Ano deve ter 4 dígitos")
			.max(currentYear, "Ano não pode ser maior que o ano atual")
			.required("Ano é obrigatório"),
	});
