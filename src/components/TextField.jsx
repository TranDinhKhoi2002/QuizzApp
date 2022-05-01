import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";

import { useDispatch } from "react-redux";
import { changeAmountHandler } from "../Redux/action";

const TextFieldComp = () => {
  const dispatch = useDispatch();

  const textChangeHandler = (e) => {
    dispatch(changeAmountHandler(e.target.value));
  };

  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <TextField
          variant="outlined"
          label="Amount of question"
          type="number"
          size="small"
          onChange={textChangeHandler}
        />
      </FormControl>
    </Box>
  );
};

export default TextFieldComp;
