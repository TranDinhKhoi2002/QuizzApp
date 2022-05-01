import { useDispatch } from "react-redux";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import {
  changeCategoryHandler,
  changeDifficultyHandler,
  changeTypeHandler,
} from "../Redux/action";

const SelectField = (props) => {
  const { label, options } = props;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const selectChangeHandler = (e) => {
    setValue(e.target.value);

    switch (label) {
      case "Category":
        dispatch(changeCategoryHandler(e.target.value));
        break;
      case "Difficulty":
        dispatch(changeDifficultyHandler(e.target.value));
        break;
      case "Type":
        dispatch(changeTypeHandler(e.target.value));
        break;
      default:
        return;
    }
  };

  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={selectChangeHandler}>
          {options.map((option) => (
            <MenuItem value={option.id} key={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;
