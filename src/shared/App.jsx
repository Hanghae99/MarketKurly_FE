import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";
import { useSelector } from "react-redux";
import { history } from "../redux/store";

import "./app.css";
import {
  Main,
  LoginPage,
  SignUpPage,
  SearchPage,
  CartPage,
  DetailPage,
  ReviewWritePage,
} from "../pages/index";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Modal from "../components/modal/Modal";
import AlertModal from "../components/modal/AlertModal";
// import ScrollTop from "./ScrollTop";

function App() {
  const is_open = useSelector((state) => state.modal.is_open);
  const is_open_alert = useSelector((state) => state.modal.alert_open);

  return (
    <>
      <ConnectedRouter history={history}>
        <Header />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={SignUpPage} />
        <Route path="/" exact component={Main} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/search" exact component={SearchPage} />
        <Route path="/detail" exact component={DetailPage} />
        <Route path="/detail/write" exact component={ReviewWritePage} />
        <Footer />
        {/* <ScrollTop /> */}
      </ConnectedRouter>
      {is_open ? <Modal /> : ""}
      {is_open_alert ? <AlertModal /> : ""}
    </>
  );
}

export default App;
