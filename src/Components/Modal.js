import React from 'react'
import {useState} from 'react';
import {Button,Modal } from 'react-bootstrap';

function Update({el,handleSubmit}) {
  //modal
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
//modal

    const [input1, setInput1]=useState( 
        {
          images: el.images,
          name: el.name,
          category: el.category,
          imdbRating: el.imdbRating
          
         });

 

          return(  
            <div>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update your movies/series list</Modal.Title>
        </Modal.Header>
        <Modal.Body>       

      
              
          <form onSubmit={handleSubmit} >
                <input defaultValue={el.Images}  onChange= { (e) => setInput1 ({...input1, images: e.target.value}) } type='text' name='images' placeholder='enter image link' /><br/>
                <input defaultValue={el.name} onChange= { (e) => setInput1 ({...input1, name: e.target.value}) } type='text' name='name' placeholder='enter movie/serie title' /> <br/>
                <input defaultValue={el.category}  onChange= { (e) => setInput1 ({...input1, category: e.target.value}) } type='text' name='category' placeholder='enter movie/serie category' /><br/>
                <input defaultValue={el.imdbRating}  onChange= { (e) => setInput1 ({...input1, imdbRating: e.target.value}) }  type='text' name='imdbRating' placeholder='enter movie/serie rating' /><br/>

            <button type="submit" >Submit</button>


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



      <button  onClick={handleShow}  /*onClick={()=> handleupdate(el.id)}*/   >Edit</button> 

      </div>
     )
     }

export default Update;