import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";
import { useSelector } from "react-redux";
import { history } from "../redux/store";

import "./app.css";
import { Main, LoginPage, SignUpPage, SearchPage, CartPage } from "../pages/index";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Modal from "../components/modal/Modal";

function App() {
  // const token = localStorage.getItem("token") ? true : false;

  // React.useEffect(() => {
  //   if (token) {
  //     dispatch(userActions.isLogin());
  //   }
  // }, []);

  const is_open = useSelector(state => state.modal.is_open);

  return (
    <>
      <ConnectedRouter history={history}>
        <Header />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={SignUpPage} />
        <Route path="/" exact component={Main} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/search" exact component={SearchPage} />
        <Footer />
      </ConnectedRouter>
      {is_open ? <Modal /> : ""}
    </>
  );
};

export default App;
