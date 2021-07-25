import { render, screen, waitFor } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { InputSearch } from "./InputSearch";
import { useAxios } from "../../../../utils/hooks";
jest.mock("../../../../utils/hooks");

const renderComponent = (props) => render(<InputSearch {...props} />);

const setProcessos = jest.fn();
const setSearchClicked = jest.fn();
const setLoading = jest.fn();
const setDetail = jest.fn();

beforeEach(() => {
	useAxios.mockReturnValue({
		getEndpoint: jest.fn(() => Promise.resolve([])),
	});
});

describe("InputSearch Component", () => {
	it("Deve renderizar campos corretamente", () => {
		renderComponent();

		expect(screen.getByText("Filtrar processos:")).toBeInTheDocument();
		expect(screen.getByText("Número")).toBeInTheDocument();
		expect(screen.getByText("Assunto")).toBeInTheDocument();
		expect(screen.getByTestId("switch-filtro")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Pesquise por número do processo")).toBeInTheDocument();
		expect(screen.getByText("Pesquisar")).toBeInTheDocument();
	});

	it("Deve buscar processo por número", async () => {
		renderComponent({ setProcessos, setSearchClicked, setLoading, setDetail });
		const { getEndpoint } = useAxios();

		const input = screen.getByPlaceholderText("Pesquise por número do processo");
		userEvent.click(input);
		userEvent.type(input, "123");

		const buscar = screen.getByText("Pesquisar");
		userEvent.click(buscar);

		await waitFor(() => expect(getEndpoint).toHaveBeenCalledWith("/processos?nu_processo=123"));
	});

	// it("Deve buscar processo por assunto", async () => {
	// 	renderComponent({ setProcessos, setSearchClicked });
	// 	const { getEndpoint } = useAxios();

	// 	const assunto = {
	// 		id: 1,
	// 		descricao: "Autorização para Corte de Árvores - Área Pública",
	// 		dtCadastro: "17/07/2021",
	// 		flAtivo: "s",
	// 	};

	// 	await getEndpoint("/assuntos").then(() => Promise.resolve([assunto]));

	// 	// const filtro = screen.getByTestId("switch-filtro");
	// 	const filtro = screen.getByRole("checkbox");
	// 	userEvent.click(filtro);

	// 	const input = screen.getByTestId("pesquise-assunto");
	// 	userEvent.click(input);

	// 	await waitFor(() =>
	// 		expect(screen.getByText(/Autorização para Corte de Árvores/g)).toBeInTheDocument()
	// 	);

	// 	const buscar = screen.getByText("Pesquisar");
	// 	userEvent.click(buscar);

	// 	await waitFor(() => expect(getEndpoint).toHaveBeenCalledWith("/processos?cd_assunto_id=undefined"));
	// });
});
