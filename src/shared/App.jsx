import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/store";

function App() {
  return (
    <>
      <ConnectedRouter history={history}></ConnectedRouter>
    </>
  );
}

export default App;
