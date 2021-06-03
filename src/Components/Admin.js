import React from 'react'
import {useState} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import Update from './Modal';
import '../App.css';;





function Movies({movie, input}) {
    const [input1, setInput1]=useState(
        {
            Images:"",
            name:"",
            category:"",
            imdbRating:"",
        
        }
    );
    //modal//
    //const [show, setShow] = useState(false);
    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
//modal//


//add function///////////////////
     const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:3008/posts`, input1).then((res) => {
          console.log(res)

        }); 
}
//Remove function///////////////////
const handleremove = (id) => {
     axios.delete(`http://localhost:3008/posts/${id}` ).then((res) => {
      console.log(res)
 }).catch((error)=>console.log(error));
}
const HandeleCHange=(e)=>{
  const {name,value}=e.target
  setInput1(
  { ...input1,
   [name]:value}
 );
}

    return (
        <div className="store-download " >
        <h1 >dashboard</h1>
        <h2>Add new movies/series</h2>
        <form onSubmit={handleSubmit} >
                <input value={input1.Images}  onChange= { HandeleCHange } type='text' name='Images' placeholder='enter image link' /><br/>
                <input value={input1.name} onChange= { HandeleCHange }  type='text' name='name' placeholder='enter movie/serie title' /> <br/>
                <input value={input1.category}  onChange= { HandeleCHange }  type='text' name='category' placeholder='enter movie/serie category' /><br/>
                <input value={input1.imdbRating} onChange= { HandeleCHange }  type='text' name='imdbRating' placeholder='enter movie/serie rating' /><br/>

            <button type="submit" >Submit</button>
   </form>

           
            <Table striped bordered hover variant="dark" size="sm">
  <thead>
    <tr>
      <th style={{width:'39px'}} >#</th>
      <th style={{width:'355px'}}>Image</th>
      <th style={{width:'312px'}}>Title</th>
      <th style={{width:'115px'}}>Category</th>
      <th style={{width:'10x'}}>Rating</th>
      <th style={{width:'10x'}}>Edit/delete</th>
    </tr>
  </thead>
  </Table>
  {movie.map(el=> 
   <Table striped bordered hover variant="dark" size="sm">
  <tbody>
    <tr>
      <td> { el.id} </td>
      <td> <img src={el.Images} alt="poster" style={{height:'250px'}} /> </td>
      <td>{el.name}  </td>
      <td>{el.category}</td>
      <td>{el.imdbRating}</td>
      <Update movie={movie} el={el} handleSubmit={handleSubmit}/>
      <td>
          <span>  
          <button className="editbutton" type="remove" form="form1" value="Remove" onClick={(e)=> handleremove(el.id,)}  >Delete</button>
          </span>
      </td>
    </tr>

</tbody>

</Table>
  )}


       </div>
)}

export default Movies;