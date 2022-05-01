import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Setting from "./pages/Setting";
import Error from "./pages/Error";
import Question from "./pages/Question";
import Final from "./pages/Final";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
            <Switch>
              <Route path="/" exact>
                <Typography variant="h2" fontWeight="bold">
                  Quizz App
                </Typography>
                <Setting />
              </Route>
              <Route path="/question">
                <Question />
              </Route>
              <Route path="/score">
                <Final />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </Box>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
