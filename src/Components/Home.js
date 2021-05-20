import Movielist from './Film';
import Navigation from './Navbar';
import Foot  from './Footer';
import Car from './Carousell';
import Spons from './Sponsors';
import Ticket from './Tickets';
import Action from './Takeaction';
import Browser from './Browsing';
import { useState } from 'react';


function Hom() {
const [input , setInput] = useState ("")
const getInput = (e)=> {
setInput(e.target.value) 
//console.log('myinput',input)
}
    return (
        <div>
    <Navigation getInput = {getInput} />
    <Car/>
    <Browser/>
    <h1 className="text-center my-5">Our movies </h1>
     <div className="d-flex flex-wrap justify-content-around mt-5"> 
     <Movielist input = {input} />
    </div>
    <Action/>
    <Ticket/>
    <Spons/>
     <Foot/>
    </div>
    )
}

export default Hom;

