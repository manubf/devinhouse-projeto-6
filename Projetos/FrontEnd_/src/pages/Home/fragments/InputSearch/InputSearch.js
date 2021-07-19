import { Switch, Typography } from "@material-ui/core";
import {
  InputBaseStyled,
  PaperStyled,
  SwitchWrapper,
  TextStyled,
  TopStyled,
} from "./InputSearch.styles";

export function InputSearch({
  inputSearch,
  setInputSearch,
  researchBySubect,
  setResearchBySubect,
}) {
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
    </TopStyled>
  );
}
