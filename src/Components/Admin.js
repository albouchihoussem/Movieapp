import React from 'react'
import {useState} from 'react';
import axios from 'axios';
import {Table,Form} from 'react-bootstrap';
import Update from './Modal';
import '../App.css';;





function Movies({movie, input,getInput}) {
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

        })
        .then(response=> window.location.reload())

}
//Remove function///////////////////
const handleremove = (id) => {
     axios.delete(`http://localhost:3008/posts/${id}` ).then((res) => {
      console.log(res)
 })
 .then(response=> window.location.reload())
 .catch((error)=>console.log(error));
}
const HandeleCHange=(e)=>{
  const {name,value}=e.target
  setInput1(
  { ...input1,
   [name]:value}
 );
}


return (
        <div className="dashback" >
  <h1 className="Title" >Welcome to the dashboard</h1>
       
        <h2 className="Titledsh">Add new movies/series</h2>


   
        <form onSubmit={handleSubmit} >
                <input className="inputdash" value={input1.Images}  onChange= { HandeleCHange } type='text' name='Images' placeholder='Enter image link' /><br/>
                <input className="inputdash" value={input1.name} onChange= { HandeleCHange }  type='text' name='name' placeholder='Enter movie/serie title' /> <br/>
                <input className="inputdash" value={input1.category}  onChange= { HandeleCHange }  type='text' name='category' placeholder='Enter movie/serie category' /><br/>
                <input className="inputdash" value={input1.imdbRating} onChange= { HandeleCHange }  type='text' name='imdbRating' placeholder='Enter movie/serie rating' /><br/>

            <button className="editbutton" type="submit" >Submit</button>
   </form>

           
            <Table striped bordered hover variant="dark" size="sm" ClassName="space">
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
  </Table  >
  {movie.map(el=> 
   <Table striped bordered hover variant="dark" size="sm">
  <tbody>
    <tr>
      <td id="tblcenter" > { el.id} </td>
      <td> <img src={el.Images} alt="poster" style={{height:'250px'}} /> </td>
      <td id="tblcenter">{el.name}  </td>
      <td id="tblcenter">{el.category}</td>
      <td id="tblcenter">{el.imdbRating}</td>
      <Update movie={movie} el={el} handleSubmit={handleSubmit}/>
      <td>
          <span>  
          <button id="editbutton" type="remove" form="form1" value="Remove" onClick={(e)=> handleremove(el.id,)}  >Delete</button>
          </span>
      </td>
    </tr>

</tbody>

</Table>
  )}


       </div>
)}

export default Movies;