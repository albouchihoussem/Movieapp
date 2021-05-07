import Movielist from './Film';
import Navigation from './Navbar';
import Foot  from './Footer';
import Car from './Carousell'


function Hom() {
    return (
        <div>
    <Navigation/>
    <Car/>
    
    <h1 className="text-center my-5">Our movies </h1>
     <div className="d-flex flex-wrap justify-content-around mt-5"> 
     <Movielist/>
    </div>
    <div className= "background"><h3>test background parallax</h3></div>
     <Foot/>
     
        </div>
    )
}

export default Hom;

