import Movielist from './Film';
import Navigation from './Navbar';
import Foot  from './Footer';
import Car from './Carousell';
import Spons from './Sponsors';
import Ticket from './Tickets';
import Action from './Takeaction';


function Hom() {
    return (
        <div>
    <Navigation/>
    <Car/>
    
    <h1 className="text-center my-5">Our movies </h1>
     <div className="d-flex flex-wrap justify-content-around mt-5"> 
     <Movielist/>
    </div>
    <Action/>
    <Ticket/>
     <Spons/>
     <Foot/>
        </div>
    )
}

export default Hom;

