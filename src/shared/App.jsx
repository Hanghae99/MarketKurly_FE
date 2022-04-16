import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import { history } from "../redux/store";
import "./app.css";
import Main from "../pages/Main";
import Header from "../components/header/Header";
import CartPage from "../pages/CartPage";
import Footer from "../components/footer/Footer";

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Header />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={SignUpPage} />
        <Route path="/" exact component={Main} />
        <Route path="/cart" exact component={CartPage} />
        <Footer />
      </ConnectedRouter>
    </>
  );
}

export default App;
