import Navigation from './Navbar';
import Foot  from './Footer';




function About({getInput}){


   
        return (
            <div>
           <Navigation getInput = {getInput} /> 
            <h2>Ma liste de films favoris</h2>  
            {/* <Movielist input = {input} /> */}
            <Foot/>
            </div>
        )

}
export default About;