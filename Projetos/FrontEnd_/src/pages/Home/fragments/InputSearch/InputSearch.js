import { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Button, Switch, TextField, Typography } from "@material-ui/core";
import {
  InputBaseStyled,
  PaperStyled,
  SwitchWrapper,
  TextStyled,
  TopStyled,
  AutocompleteWrapper,
} from "./InputSearch.styles";

import { useAxios } from "../../../../utils/hooks";

export function InputSearch({ setProcessos, setSearchClicked }) {
  const [researchBySubect, setResearchBySubect] = useState(false);
  const [inputSearch, setInputSearch] = useState(undefined);
  const [input, setInput] = useState(researchBySubect[0]);
  const [labelValue, setLabelValue] = useState("");
  const [subjectList, setSubjectList] = useState([]);

  const { getEndpoint } = useAxios();

  useEffect(() => {
    getEndpoint(`/assuntos`).then((response) => setSubjectList(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleclick = () => {
    setSearchClicked(true);
    if (researchBySubect) {
      console.log("assunto");
      getEndpoint(`/processos?cd_assunto_id=${input}`).then((response) =>
        setProcessos(response)
      );
    } else {
      console.log("número");
      getEndpoint(`/processos?nu_processo=${inputSearch}`).then((response) =>
        setProcessos(response)
      );
    }
  };

  return (
    <TopStyled>
      <TextStyled variant="h2">Filtrar processos:</TextStyled>

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

      {researchBySubect ? (
        <AutocompleteWrapper>
          <Autocomplete
            id="pesquise-assunto"
            options={subjectList}
            getOptionLabel={(option) => option.descricao}
            style={{ width: 300 }}
            value={input || ""}
            onChange={(e, newInputValue) => {
              setInput(newInputValue?.id);
            }}
            inputValue={labelValue}
            onInputChange={(event, newValue) => {
              setLabelValue(event?.target?.outerText);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Pesquise por assunto"
                variant="outlined"
              />
            )}
          />
        </AutocompleteWrapper>
      ) : (
        <PaperStyled component="form">
          <InputBaseStyled
            placeholder={
              researchBySubect
                ? "Pesquise por assunto"
                : "Pesquise por número do processo"
            }
            value={inputSearch || ""}
            onChange={(e) => setInputSearch(e.target.value)}
            type="number"
          />
        </PaperStyled>
      )}

      <Button onClick={handleclick} variant="outlined">
        Pesquisar
      </Button>
    </TopStyled>
  );
}
