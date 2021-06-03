import React from 'react';
import Navigation from './Navbar';
import Foot  from './Footer';
import Movielist from './Film';
import { useState } from 'react';

function Contact ({getInput}){
   
       
                return (
                    <div>
                   <Navigation getInput = {getInput} /> 
{/* *******************************start***************** */}
  

  


{/* *******************************END***************** */}

                   {/* <Movielist input = {input} /> */}
                    <Foot/>
                    </div>
                )
        
        }

export default Contact;