import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Sobre from "./components/pages/Sobre";
import Contato from "./components/pages/Contato";
import Colabore from "./components/pages/Colabore";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/colabore">
          <Colabore />
        </Route>
        <Route path="/contato">
          <Contato />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
