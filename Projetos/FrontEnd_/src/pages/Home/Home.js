import React, { useEffect, useState } from "react";

import { useAxios } from "../../utils/hooks";

import {
	ContentWrapper,
	DetailWrapper,
	ProcessWrapper,
	TopStyled,
	TextStyled,
	ButtonStyled,
	MessageWrapper,
} from "./Home.styles";
import { Process, ProcessDetail, CreateEditProcess, InputSearch } from "./fragments";
import { Typography } from "@material-ui/core";

export function Home() {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(true);
	const [processos, setProcessos] = useState([{}, {}, {}]);
	const [searchClicked, setSearchClicked] = useState(false);
	const [detail, setDetail] = useState({
		appears: false,
		processClicked: undefined,
	});

	const { getEndpoint } = useAxios();

	useEffect(() => {
		const getAPI = async () => {
			const response = await getEndpoint("/processos");
			setProcessos(response);
			setLoading(false);
		};
		getAPI();
	}, [getEndpoint]);

	detail.appears &&
		window.scroll({
			top: 0,
			behavior: "smooth",
		});

	return (
		<>
			<TopStyled>
				<TextStyled variant="h2">Cadastrar processo:</TextStyled>

				<ButtonStyled
					variant="outlined"
					onClick={() => {
						setDetail({
							appears: false,
							processClicked: undefined,
						});
						setOpen(true);
					}}
					color="primary"
				>
					Novo
				</ButtonStyled>
			</TopStyled>

			<InputSearch setProcessos={setProcessos} setSearchClicked={setSearchClicked} setLoading={setLoading} setDetail={setDetail} />

			{!searchClicked && processos?.length === 0 && (
				<MessageWrapper>
					<Typography variant="h6">Realize uma busca para continuar.</Typography>
				</MessageWrapper>
			)}

			{searchClicked && processos?.length === 0 ? (
				<MessageWrapper>
					<Typography variant="h6">Nenhum processo foi encontrado com esses parâmetros.</Typography>
				</MessageWrapper>
			) : (
				<ContentWrapper appears={detail.appears}>
					<ProcessWrapper appears={detail.appears}>
						{processos?.map((process) => (
							<Process
								loading={loading}
								key={process.id}
								process={process}
								setDetail={setDetail}
								detail={detail}
							/>
						))}
					</ProcessWrapper>

					{detail.appears && (
						<DetailWrapper>
							<ProcessDetail
								processToEdit={detail.processClicked}
								setDetail={setDetail}
								setOpen={setOpen}
								setProcessos={setProcessos}
							/>
						</DetailWrapper>
					)}
				</ContentWrapper>
			)}

			<CreateEditProcess
				open={open}
				setOpen={setOpen}
				processToEdit={detail.processClicked}
				setProcessos={setProcessos}
				setDetail={setDetail}
			/>
		</>
	);
}
