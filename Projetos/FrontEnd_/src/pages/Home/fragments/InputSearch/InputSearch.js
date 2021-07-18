// import { useDispatch } from "react-redux";

import SearchIcon from "@material-ui/icons/Search";
import {
  IconButtonStyled,
  InputBaseStyled,
  PaperStyled,
} from "./InputSearch.styles";

// import { getInputSearch } from "../../redux/selectors";
// import { setInputSearch } from "../../redux/actions";

export function InputSearch({
  // inputClick,
  // inconClick,
  // marginInput, // ver se vai precisar mesmo
  inputSearch,
  setInputSearch,
}) {
  // const dispatch = useDispatch();
  // const inputSearch = useSelector(getInputSearch);

  // const handleIputClick = (e) => {
  //   inputClick && inputClick();
  // };

  // const handleIconClick = (e) => {
  //   e.preventDefault();
  //   inconClick && inconClick();
  // };

  return (
    <PaperStyled component="form">
      <InputBaseStyled
        placeholder="Pesquise por uma informação do processo"
        value={inputSearch || ""}
        onChange={(e) => setInputSearch(e.target.value)} // dispatch(setInputSearch(e.target.value))
        // onClick={handleIputClick}
      />

      <IconButtonStyled
        type="submit"
        // onClick={handleIconClick}
      >
        <SearchIcon />
      </IconButtonStyled>
    </PaperStyled>
  );
}
