import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CreateEditProcess } from "./CreateEditProcess";
import { useAxios } from "../../../../utils/hooks";
jest.mock("../../../../utils/hooks");

const renderComponent = (props) => {
	render(<CreateEditProcess open={true} {...props} />);
};

beforeEach(() => {
	useAxios.mockReturnValue({
		getEndpoint: jest.fn(() => Promise.resolve([])),
		// postEndpoint: jest.fn(() => Promise.resolve({})),
		// putEndpoint: jest.fn(),
	});

	renderComponent();
});

describe("CreateEditProcess Component", () => {
	it("Deve renderizar o formulário corretamente", () => {
		expect(screen.getByText("Cadastro de processo")).toBeInTheDocument();
		expect(screen.getByText("Assunto")).toBeInTheDocument();
		expect(screen.getByText("Interessado")).toBeInTheDocument();
		expect(screen.getByText("Descrição")).toBeInTheDocument();
		expect(screen.getByText("Órgão/Setor")).toBeInTheDocument();
		expect(screen.getByText("Ano")).toBeInTheDocument();
	});

	it("Deve desabilitar botão de Salvar e exibir mensagens de erro quando tentar salvar formulário incorreto ou incompleto", async () => {
		const salvar = screen.getByRole("button", { name: "Salvar" });
		userEvent.click(salvar);

		await waitFor(() => expect(salvar).toBeDisabled());
		expect(screen.getByText("Selecione o assunto")).toBeInTheDocument();
		expect(screen.getByText("Selecione o interessado")).toBeInTheDocument();
		expect(screen.getByText("Descrição é obrigatória")).toBeInTheDocument();
		expect(screen.getByText("Selecione o setor do orgao")).toBeInTheDocument();
	});
});
