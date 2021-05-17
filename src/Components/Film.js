import React, {useState,useEffect}from 'react';
import {Card,Button } from 'react-bootstrap';


function Movielist () {
  const [movie, setMovie] = useState([])
  const getMovie = ()=>{
    
    fetch('Movies.json').then(
          response => response.json()).then 
                   (Movies => setMovie(Movies));
  }
  
  useEffect(()=> {getMovie()
  },[])

  console.log(movie)
  return(
    
      movie.map(el=>
      <div>

<Card className="carte my-3" style={{ width: '14rem' }}>
  <Card.Img variant="top" src={el.Images} style={{height:'350px'}}  />
  <Card.Body className="corps">
  <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
		  	</i>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>{el.category}</Card.Text>
    <Card.Text>{el.imdbRating}<img className="star" alt="star" src="https://i.pinimg.com/originals/03/2f/ce/032fce11a0fb8e87c65b3369a6443674.png" /></Card.Text>
    <Button className="boutton" variant="">Watch now</Button>
  </Card.Body>
</Card>
</div> 
      )
  
   )

 }

export default Movielist;


