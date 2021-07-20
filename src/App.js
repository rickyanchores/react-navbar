import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  return (
    <>
    <Router>
      <Navbar />
    </Router> 
    </>
  );
}

export default App;
