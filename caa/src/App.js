import logo from './static/images/caa_title.png';
import './App.css';
import Header from "./components/Header"
import Home from './components/Home';
import Profile from './components/Profile';
import Details from './components/Details';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/rewards" element={<Details planName = "basic"/>} />
          <Route exact path="/profile" element={<Profile/>} />
        </Routes>

        {/* <Home/> */}
      </div>
    </Router>
  );
}

export default App;
