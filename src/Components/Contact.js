import React from 'react';
import Navigation from './Navbar';
import Foot  from './Footer';
import Movielist from './Film';
import { useState } from 'react';

function Contact (){
   
        const [input , setInput] = useState ("")
        const getInput = (e)=> {
        setInput(e.target.value) 
        }
           
                return (
                    <div>
                   <Navigation getInput = {getInput} /> 
                   <Movielist input = {input} />
                    <Foot/>
                    </div>
                )
        
        }

export default Contact;