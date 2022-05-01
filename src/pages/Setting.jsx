import { CircularProgress, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import Axios from "../hooks/Axios";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextField";

const Setting = () => {
  const { response, loading, error } = Axios({ url: "/api_category.php" });
  const history = useHistory();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something went wrong
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/question");
  };

  return (
    <form onSubmit={submitHandler}>
      <SelectField options={response.trivia_categories} label="Category" />
      <SelectField options={difficultyOptions} label="Difficulty" />
      <SelectField options={typeOptions} label="Type" />
      <TextFieldComp />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default Setting;
