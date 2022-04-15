import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";
import LoginPage from "../pages/LoginPage";
import { history } from "../redux/store";
import "./app.css";
import Main from "../pages/Main";
import Header from "../components/header/Header";

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Route path="/" component={Header} />
        <Route path="/" exact component={Main} />
        <Route path="/" exact component={LoginPage} />
      </ConnectedRouter>
    </>
  );
};

export default App;
