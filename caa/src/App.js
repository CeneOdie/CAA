import './App.css';
import Header from "./components/Header"
import Home from './components/Home';
import Profile from './components/Profile';
import Details from './components/Details';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  var test_user = {
    name: "Pat Martin",
    membership: "620 282 1234567 000",
    expiry_date: "08/31/2022",
    caa_balance: 254.21, 
    tier: "Basic"
  }


  return (
    <Router>
      <div className="App">
        <Header/>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/rewards/:plan" element={<Details />} />
          <Route exact path="/profile" element={<Profile user = {test_user}/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
