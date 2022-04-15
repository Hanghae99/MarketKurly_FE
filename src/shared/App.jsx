import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";
import { history } from "../redux/store";

import "../app.css"
import Main from "../pages/Main";
import Header from "../components/header/Header";

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Route path="/" component={Header} />
        <Route path="/" exact component={Main} />
      </ConnectedRouter>
    </>
  );
};

export default App;
