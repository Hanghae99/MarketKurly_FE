import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";
import LoginPage from "../pages/LoginPage";
import { history } from "../redux/store";
import "./app.css";
import Main from "../pages/Main";
import Header from "../components/header/Header";
import SignUpPage from "../pages/SignUpPage";
import CartPage from "../pages/CartPage";

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/cart" exact component={CartPage} />
      </ConnectedRouter>
    </>
  );
};

export default App;
