import Movielist from './Film';
import Navigation from './Navbar';
import Foot  from './Footer';
import Car from './Carousell';
import Spons from './Sponsors';
import Ticket from './Tickets';
import Action from './Takeaction';
import Browser from './Browsing';
import React, {useState}from 'react';



function Hom({movie,input,getInput}) {


    return (
        <div>
    <Navigation input={input} getInput = {getInput} />
    <Car/>
    <Browser/>
    <h1 className=" ourmovies text-center my-5">Our movies </h1>
     <div className="d-flex flex-wrap justify-content-around mt-5"> 
     <Movielist input = {input} movie={movie} />
    </div>
    <Action/>
    <Ticket/>
    <Spons/>
     <Foot/>
    </div>
    )
}

export default Hom;

