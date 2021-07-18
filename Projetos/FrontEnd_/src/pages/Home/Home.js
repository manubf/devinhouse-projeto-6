import React, { useEffect, useState } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Box } from "@material-ui/core";

// import { useAxios } from "../../utils/hooks";
// import ProcessoService from "../../service";

import {
  ContentWrapper,
  DetailWrapper,
  ProcessWrapper,
  TopStyled,
  TextStyled,
  ButtonStyled
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
    {
      numero: 123,
      descricao:
        "auhauah uhauhauha skoskodkdo haiuhsijd jdosjkmsnssfjkf hfshiihifhifhf ojokopk",
      assunto:
        "auhauah uhauhauha skoskodkdo haiuhsijd jdosjkmsnssfjkf hfshiihifhifhf ojokopk",
      interessados: ["aaa", "bbbb"],
    },
    {
      numero: 321,
      descricao: "jsjsjsjssj",
      assunto: "assunto 2",
      interessados: ["cccc", "ddddd"],
    },
  ]);
  const [detail, setDetail] = useState({
    appears: false,
    processClicked: undefined,
  });
  const [inputSearch, setInputSearch] = useState(undefined);

  detail.appears &&
    window.scroll({
      top: 0,
      behavior: "smooth",
    });

  useEffect(() => {
    // ProcessoService.buscaProcessos().then((response) => {
    setLoading(false);
    //   setProcessos(response);
    // });
  }, []);

  const formatString = (text) =>
    text
      ?.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const result = inputSearch
    ? processos.filter((item) => {
        const formatInput = formatString(inputSearch);
        const numero = formatString(item?.numero.toString())?.includes(
          formatInput
        );
        const entrada = formatString(item?.entrada)?.includes(formatInput);
        const descricao = formatString(item?.descricao)?.includes(formatInput);
        const assunto = formatString(item?.assunto)?.includes(formatInput);
        const interessados = item.interessados.filter((interessado) =>
          formatString(interessado)?.includes(formatInput)
        );
        return numero || entrada || descricao || assunto || interessados[0];
      })
    : processos; // [];

  // const axiosInstance = useAxios("http://localhost:8080"); // BACKEND 1

  // const callApi = useCallback(() => {
  // 	!!axiosInstance.current && axiosInstance.current.get("/user");
  // }, [axiosInstance]);

  return (
    <>
      <Box m={4}>
        <TopStyled>
          <TextStyled variant="h2">
            Busca de processos
          </TextStyled>

          <InputSearch
            marginInput="0 20px"
            inputSearch={inputSearch}
            setInputSearch={setInputSearch}
          />

          <ButtonStyled
            variant="outlined"
            className="novo"
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
      </Box>

      {loading ? (
        <Skeleton
          animation="wave"
          height={10}
          width="100%"
          style={{ marginBottom: 6 }}
        />
      ) : (
        <ContentWrapper appears={detail.appears}>
          <ProcessWrapper appears={detail.appears}>
            {result?.map((process) => (
              <Process
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
