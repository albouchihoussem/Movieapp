
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Hom from './Components/Home';
import Favoris from './Components/Favoris';
import Contact from './Components/Contact';
import Admin from './Components/Admin'
import { BrowserRouter, Route} from "react-router-dom";
import React, {useState,useEffect}from 'react';
import axios from 'axios';


function App() {
 
  const [movie, setMovie] = useState([])
  const getmovie = ()=>{
    
    axios.get('http://localhost:3008/posts')
    .then ((response) => setMovie(response.data)
    
    );
  }
  useEffect(()=> {getmovie()
  },[]) 


  console.log(movie)

  const [input , setInput] = useState ("")

  const getInput = (e)=> {
  setInput(e.target.value) 
 e.preventDefault()
console.log(`inpiuuuuuuuuuut`, input)
  }

  return (
<BrowserRouter>
<div className="App">
       <Route exact path="/" > <Hom movie={movie} input={input} getInput={ getInput}/> </Route> 
        <Route  path="/About" > <About/> </Route>
      <Route  path="/Contact" > <Contact/> </Route>
       <Route  path="/Favoris"> <Favoris/> </Route>
       <Route  path="/Admin"> <Admin  movie={movie} input={input}/> </Route>
</div>
  </BrowserRouter>
 
  
  );
}
export default App;





