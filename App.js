
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Approute from "./route";
import Footer from "./component/layout/Footer";
import Header from "./component/layout/Header";
function App() {
 

  return (

      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Approute} />
        </Switch>
        <Footer />
      </Router>
  );
}


export default App;
