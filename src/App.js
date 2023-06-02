import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./layout/navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCompetitor from "./competitors/AddCompetitor";
import EditCompetitor from "./competitors/EditCompetitor";
import ViewCompetitor from "./competitors/ViewCompetitor";
function App() {
  return (
    <div className="App">
      <Router>

    <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddCompetitor />} />
          <Route exact path="/edituser/:id" element={<EditCompetitor />} />
          <Route exact path="/viewuser/:id" element={<ViewCompetitor />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
