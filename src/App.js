import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

import "./App.css";
import CompleteNotes from "./components/CompleteNotes";

function App() {
  const addNote = (note) => {
    alert(note.desc);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <CreateNote passNote={addNote} />
            <Footer />
          </Route>

          <Route exact path="/allnotes">
            <Header />
            <CompleteNotes />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
