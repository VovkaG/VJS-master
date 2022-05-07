import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Contact2 from "./pages/Contact2";
import BugRep from "./pages/BugRep";
import BugReport2 from "./pages/BugReport2";
import option1 from "./pages/option1";
import option2 from "./pages/option2";
import option3 from "./pages/option3";
import option4 from "./pages/option4";
import option5 from "./pages/option5";
import option6 from "./pages/option6";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/contact2" exact component={Contact2} />
          <Route path="/bugreport" exact component={BugRep} />
          <Route path="/bugreport2" exact component={BugReport2} />

          <Route path="/option1" exact component={option1} />
          <Route path="/option2" exact component={option2} />
          <Route path="/option3" exact component={option3} />
          <Route path="/option4" exact component={option4} />
          <Route path="/option5" exact component={option5} />
          <Route path="/option6" exact component={option6} />

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
