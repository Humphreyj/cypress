import Context from "./context/Context";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter as Router } from "react-router-dom";
//styles
import "./styles/global.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Context>
          <Header />
          <Main />
        </Context>
      </div>
    </Router>
  );
}

export default App;
