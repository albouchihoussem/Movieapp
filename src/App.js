import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Hom from './Components/Home';
import Favoris from './Components/Favoris';
import Contact from './Components/Contact';
import { BrowserRouter, Route} from "react-router-dom";



function App() {
  return (
<BrowserRouter>
<div className="App">
       <Route exact path="/" component={Hom} />
        <Route exact path="/About" component={About} />
      <Route exact  path="/Contact" component={Contact} />
       <Route exact path="/Favoris" component={Favoris} />
</div>
  </BrowserRouter>
 
  
  );
}
export default App;





