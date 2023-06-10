import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message) => {
    setalert({
      msg: message,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212533";
      showAlert("Dark Mode Enabled.");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled.");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextAnalyzer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} toggleMode={toggleMode} />
            </Route>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Text Analyzer - Word Counter | Character Counter"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
