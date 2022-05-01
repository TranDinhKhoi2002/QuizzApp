import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeAmountHandler, changeScoreHandler } from "../Redux/action";

const Final = () => {
  const { score } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();

  const backToSettingHandler = () => {
    dispatch(changeScoreHandler(0));
    dispatch(changeAmountHandler(50));
    history.replace("/");
  };

  return (
    <Box mt={30}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Final Score: {score}
      </Typography>
      <Button onClick={backToSettingHandler} variant="outlined">
        Back to setting
      </Button>
    </Box>
  );
};

export default Final;
