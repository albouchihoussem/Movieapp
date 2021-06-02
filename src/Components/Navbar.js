import {React }from 'react';
import{Navbar,Form,Nav} from "react-bootstrap";
import {Link} from 'react-router-dom';



function Navigation({getInput}){
    return (
<div>
<Navbar className="nav" bg="dark" expand="lg" fixed="top" >
  <Navbar.Brand href="#home">
 <div className="d-flex align-items-center"> <img
        src="Images/movielogo.png" color="#FF5A5F"
        width="90" 
      
        className="logo"
        alt="Movietime"
      /><h3 className="titrelogo">Movie time</h3></div>

    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <Link to="/" className="navlink nav-link-ltr"> Home</Link>
      <Link to="/about" className="navlink nav-link-ltr">About us</Link>
      <Link to="/contact" className="navlink nav-link-ltr">Contact</Link>
    </Nav>
    
    <Form className="mr-4">
  <input className="put" type="search" placeholder="Search" onChange ={getInput} /> 
  <i  className="fas fa-search"></i>

  <Link to="/favoris" className="iconav"> <i class="far fa-heart  mr-4" ></i> <span className="badge badge-danger rounded-circle">0</span></Link>

</Form>

  </Navbar.Collapse>
</Navbar>
</div> 
)
    }

export default Navigation;