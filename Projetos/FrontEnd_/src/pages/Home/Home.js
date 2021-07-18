import React, { useEffect, useState } from "react";
// import { useKeycloak } from "@react-keycloak/web";
import Skeleton from "@material-ui/lab/Skeleton";

// import { useAxios } from "../../utils/hooks";
import { ContentWrapper, DetailWrapper, ProcessWrapper } from "./Home.styles";
import { Process, ProcessDetail } from "./fragments";

export function Home() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false); // mudar pra true
  const [processos, setProcessos] = useState([
    {
      numero: 123,
      descricao: "auhauah uhauhauha skoskodkdo haiuhsijd jdosjkmsnssfjkf hfshiihifhifhf ojokopk",
      assunto: "auhauah uhauhauha skoskodkdo haiuhsijd jdosjkmsnssfjkf hfshiihifhifhf ojokopk",
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

  detail.appears &&
    window.scroll({
      top: 0,
      behavior: "smooth",
    });

  // useEffect(() => {
  // ProcessoService.buscaProcessos().then((response) => {
  //   setLoading(false);
  //   setProcessos(response);
  // });
  // }, []);

  // const axiosInstance = useAxios("http://localhost:8080"); // BACKEND 1

  // const callApi = useCallback(() => {
  // 	!!axiosInstance.current && axiosInstance.current.get("/user");
  // }, [axiosInstance]);

  const result = processos; // mudar pra filtrados

  return (
    <>
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
    </>
  );
}
