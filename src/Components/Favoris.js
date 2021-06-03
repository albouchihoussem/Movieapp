import Navigation from './Navbar';
import Foot  from './Footer';
import Movielist from './Film';
import { useState } from 'react';


function Favoris ({getInput,input}){
   
        return (
            <div>
           <Navigation getInput = {getInput} /> 

            <h2>Ma liste de films favoris</h2>  
        {/* <Movielist input = {input} /> */}
            <Foot/>
            </div>
        )

}

export default Favoris;