import React, { useEffect, useState } from "react";

import { useAxios } from "../../utils/hooks";
// import ProcessoService from "../../service";

import {
  ContentWrapper,
  DetailWrapper,
  ProcessWrapper,
  TopStyled,
  TextStyled,
  ButtonStyled,
} from "./Home.styles";
import {
  Process,
  ProcessDetail,
  CreateEditProcess,
  InputSearch,
} from "./fragments";

export function Home() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [processos, setProcessos] = useState([
    //   {
    //     "id": 1,
    //     "nuProcesso": 1,
    //     "sgOrgaoSetor": "SOFT",
    //     "nuAno": "2010",
    //     "chaveProcesso": "SOFT 1/2010",
    //     "descricao": "Processo 1 de testes DEV In House ",
    //     "cdAssunto": {
    //       "id": 1,
    //       "descricao": "Autorização para Corte de Árvores - Área Pública",
    //       "dtCadastro": "2021-07-17",
    //       "flAtivo": "s"
    //     },
    //     "cdInteressado": {
    //       "id": 2,
    //       "nmInteressado": "Amanda da gata Mel",
    //       "nuIdentificacao": "62560244004",
    //       "dtNascimento": "2000-08-05",
    //       "flAtivo": "s"
    //     }
    //   },
    {},
    {},
    {},
  ]);

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
    getAPI()
  }, [getEndpoint]);

  // const formatString = (text) =>
  //   text
  //     ?.toLowerCase()
  //     .normalize("NFD")
  //     .replace(/[\u0300-\u036f]/g, "");

  // TODO: essa parte da pesquisa precisa ser refeita, pois dependerá agora de endpoints de pesquisa por número ou assunto
  // const result = inputSearch
  //   ? processos.filter((item) => {
  //       const formatInput = formatString(inputSearch);
  //       const nuProcesso = formatString(item?.nuProcesso.toString())?.includes(
  //         formatInput
  //       );
  //       const entrada = formatString(item?.entrada)?.includes(formatInput);
  //       const descricao = formatString(item?.descricao)?.includes(formatInput);
  //       const assunto = formatString(item?.cdAssunto?.descricao)?.includes(
  //         formatInput
  //       );
  //       const interessado =
  //         item.cdInteressado?.nmInteressado?.includes(formatInput);
  //       return nuProcesso || entrada || descricao || assunto || interessado;
  //     })
  //   : processos; // [];  sem pesquisa talvez deixar vazio e mostrar uma mensagem

  // const result = clicksearch ? lala : processos;

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
        >
          Novo
        </ButtonStyled>
      </TopStyled>

      <InputSearch
        // inputSearch={inputSearch}
        // setInputSearch={setInputSearch}
        // researchBySubect={researchBySubect}
        // setResearchBySubect={setResearchBySubect}
        setProcessos={setProcessos}
      />

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
              id={detail?.processClicked.id}
              setDetail={setDetail}
              setOpen={setOpen}
              setProcessos={setProcessos}
            />
          </DetailWrapper>
        )}
      </ContentWrapper>

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
