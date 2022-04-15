import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import { history } from "../redux/store";
import "./app.css";

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={SignUpPage} />
      </ConnectedRouter>
    </>
  );
}

export default App;
