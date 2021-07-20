import { useState } from "react";
import { Button, Switch, Typography } from "@material-ui/core";
import {
  InputBaseStyled,
  PaperStyled,
  SwitchWrapper,
  TextStyled,
  TopStyled,
} from "./InputSearch.styles";

import { useAxios } from "../../../../utils/hooks";

export function InputSearch({
  // inputSearch,
  // setInputSearch,
  // researchBySubect,
  // setResearchBySubect,
  setProcessos,
}) {
  const [inputSearch, setInputSearch] = useState(undefined);
  const [researchBySubect, setResearchBySubect] = useState(false);

  const { getEndpoint } = useAxios();

  const handleclick = () => {
    if (researchBySubect) {
      console.log("assunto");
      // setProcessos([
      //   {
      //     id: 35,
      //     nuProcesso: 35,
      //     sgOrgaoSetor: "hous",
      //     nuAno: "2018",
      //     chaveProcesso: "hous 35/2018",
      //     descricao: "Processo blablabla ",
      //     cdAssunto: {
      //       id: 1,
      //       descricao: "Autorização para Corte de Árvores - Área Pública",
      //       dtCadastro: "2021-07-17",
      //       flAtivo: "s",
      //     },
      //     cdInteressado: {
      //       id: 2,
      //       nmInteressado: "Amanda da gata Mel",
      //       nuIdentificacao: "62560244004",
      //       dtNascimento: "2000-08-05",
      //       flAtivo: "s",
      //     },
      //   },
      // ]);
      // alterar pra lista de números
      getEndpoint(`/processos?cd_assunto_id=${inputSearch}`).then((response) =>
        setProcessos(response)
      );
    } else {
      console.log("número");
      getEndpoint(`/processos/${inputSearch}`).then((response) =>
        setProcessos(response)
      );
      // setProcessos([
      //   {
      //     id: 34,
      //     nuProcesso: 34,
      //     sgOrgaoSetor: "devn",
      //     nuAno: "2018",
      //     chaveProcesso: "devn 34/2018",
      //     descricao: "Processo 5826262 de testes DEV In House ",
      //     cdAssunto: {
      //       id: 10,
      //       descricao: "Edital de Temporada de Verão 2021/2021",
      //       dtCadastro: "2021-07-17",
      //       flAtivo: "s",
      //     },
      //     cdInteressado: {
      //       id: 3,
      //       nmInteressado: "Rosana do TuTu",
      //       nuIdentificacao: "14467787038",
      //       dtNascimento: "1987-03-11",
      //       flAtivo: "s",
      //     },
      //   },
      // ]);
    }
  };

  return (
    <TopStyled>
      <TextStyled variant="h2">Buscar processos:</TextStyled>

      <SwitchWrapper>
        <Typography>Número</Typography>
        <Switch
          checked={researchBySubect}
          onChange={(e) => setResearchBySubect(e.target.checked)}
          name="type of research"
          color="primary"
        />
        <Typography>Assunto</Typography>
      </SwitchWrapper>

      {/* {researchBySubect ? (
        <>cccccc</>
      ) : ( */}
        <PaperStyled component="form">
          <InputBaseStyled
            placeholder={
              researchBySubect
                ? "Pesquise por assunto"
                : "Pesquise por número do processo"
            }
            value={inputSearch || ""}
            onChange={(e) => setInputSearch(e.target.value)}
          />
        </PaperStyled>
      {/* )} */}

      <Button onClick={handleclick}>Pesquisar</Button>
    </TopStyled>
  );
}
