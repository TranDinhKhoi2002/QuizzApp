import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { decode } from "html-entities";

import Axios from "../hooks/Axios";
import { changeScoreHandler } from "../Redux/action";

const getRandomIndex = (number) => {
  console.log(number, Math.random(), Math.floor(number));
  return Math.floor(Math.random() * Math.floor(number));
};

const Question = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
  } = useSelector((state) => state);

  let apiUrl = `/api.php?amount=${amount_of_question}`;

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }

  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }

  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }

  const { response, loading, error } = Axios({ url: apiUrl });

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomIndex(question.incorrect_answers.length),
        0,
        question.correct_answer
      );

      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box mt={20} component="h2">
        Somthing went wrong, please try again!
      </Box>
    );
  }

  const clickAnswerHandler = (e) => {
    const question = response.results[questionIndex];

    if (e.target.textContent === question.correct_answer) {
      dispatch(changeScoreHandler(score + 1));
    }

    if (questionIndex < response.results.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      history.replace("/score");
    }
  };

  return (
    <Box>
      <Typography variant="h4">Question {questionIndex + 1}</Typography>
      <Typography mt={5}>
        {decode(response.results[questionIndex].question)}
      </Typography>
      {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button variant="contained" onClick={clickAnswerHandler}>
            {decode(data)}
          </Button>
        </Box>
      ))}
      <Box mt={5}>
        Score: {score} / {response.results.length}
      </Box>
    </Box>
  );
};

export default Question;
