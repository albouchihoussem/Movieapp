import React from 'react'
import {useState} from 'react';
import axios from 'axios';
import {Button,Table,Modal } from 'react-bootstrap';





function Movies({movie, input}) {
    const [input1, setInput1]=useState(
        {
            images:"",
            name:"",
            category:"",
            imdbRating:"",
        
        }
    );


    // const handleChange = e => { 
    //     const {name, value}=e.target
    //     // e.target.name=e.target.value 
    //     setInput1({
    //         ...input1,
    //         [name]:value
    //     });
    // };

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
//Update function///////////////////
function handleupdate (id) {
  console.log (id)
}






//modal
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
//modal


    return (
        <>
        <h1>dashboard</h1>
        <h2>Add new movies/series</h2>
        <form onSubmit={handleSubmit} >
                <input value={input1.images}  onChange= { (e) => setInput1 ({...input1, images: e.target.value}) } type='text' name='images' placeholder='enter image link' /><br/>
                <input value={input1.name} onChange= { (e) => setInput1 ({...input1, name: e.target.value}) } type='text' name='name' placeholder='enter movie/serie title' /> <br/>
                <input value={input1.category}  onChange= { (e) => setInput1 ({...input1, category: e.target.value}) } type='text' name='category' placeholder='enter movie/serie category' /><br/>
                <input value={input1.imdbRating}  onChange= { (e) => setInput1 ({...input1, imdbRating: e.target.value}) }  type='text' name='imdbRating' placeholder='enter movie/serie rating' /><br/>

            <button type="submit" >Submit</button>
   {/* <button type="remove" form="form1" value="Remove" onClick={handleremove}>Delete</button> */}
   </form>

           
            <Table striped bordered hover variant="dark" size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Image</th>
      <th>Title</th>
      <th>Category</th>
      <th>Rating</th>
      <th>Edit/delete</th>
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
      <td>
          <span>  
          <button  onClick={handleShow}  /*onClick={()=> handleupdate(el.id)}*/   >Edit</button> 
          <button type="remove" form="form1" value="Remove" onClick={(e)=> handleremove(el.id,)}>Delete</button>
          </span>
      </td>
    </tr>

</tbody>

</Table>
  )}

         
      
        {/* .filter(element=> {
            if (input === ""){
                return element
            } else if(element.name.toLowerCase().includes(input.toLowerCase()) ){
                return element} }) 

                
                     <input defaultValue={movieprps.images}  onChange= { (e) => setInput1 ({...input1, images: e.target.value}) } type='text' name='images' placeholder='enter the image link' /><br/>
               <input defaultValue={movieprps.name} onChange= { (e) => setInput1 ({...input1, name: e.target.value}) } type='text' name='name' placeholder='enter the movie title' /> <br/>
              <input defaultValue={movieprps.category}  onChange= { (e) => setInput1 ({...input1, category: e.target.value}) } type='text' name='category' placeholder='enter the movie category' /><br/>
              <input defaultValue={movieprps.imdbRating}  onChange= { (e) => setInput1 ({...input1, imdbRating: e.target.value}) }  type='text' name='imdbRating' placeholder='enter the movie rating' /><br/>
*/}

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update your movies/series list</Modal.Title>
        </Modal.Header>
        <Modal.Body>       

          <form onSubmit={handleSubmit} >
              <h3>hello</h3>

   {/* <button type="remove" form="form1" value="Remove" onClick={handleremove}>Delete</button> */}
   </form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

       </>
)}

export default Movies;