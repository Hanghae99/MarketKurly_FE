import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";
import LoginPage from "../pages/LoginPage";
import { history } from "../redux/store";
import "./app.css";

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={LoginPage} />
      </ConnectedRouter>
    </>
  );
}

export default App;
