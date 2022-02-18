import logo from './logo.svg';
import Home from './Components/Home';
import Registration from './Components/Registration';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"  element={<Home />}></Route>
            <Route path="/Registration" element={<Registration />}/>
          
         </Routes>
      </Router>
      
    </div>
  );
}

export default App;
