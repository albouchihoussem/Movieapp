import React from 'react'
import {useState} from 'react';
import {Button,Modal } from 'react-bootstrap';
import axios from "axios";
import '../App.css';;



function Update({el}) {
  //modal
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
//modal

    const [input2, setinput2]=useState( 
        { id: el.id,
          Images: el.Images,
          name: el.name,
          category: el.category,
          imdbRating: el.imdbRating
          
         });
         const HandelCHange=(e)=>{
           const {name,value}=e.target
          setinput2(
           { ...input2,
            [name]:value}
          );
         }
//update Function//////////////////////
const handleUpdate = async (id) => {
          await axios.put(`http://localhost:3008/posts/${id}`,input2)
          .then(response => {console.log('Status:' , response.status)
                             console.log('Data : ', response.data)
                             setinput2(response.data)})

                             .then(response=> window.location.reload())

          .catch(error => console.error('something went wrong', error)
          )}
///////////////////////////////////////


          return(  
            <div>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update your movies/series list</Modal.Title>
        </Modal.Header>
        <Modal.Body>       

      
              
          <form>
                <input defaultValue={el.Images}  onChange= { HandelCHange} type='text' name='Images' placeholder='enter image link' /><br/>
                <input defaultValue={el.name} onChange= { HandelCHange} type='text' name='name' placeholder='enter movie/serie title' /> <br/>
                <input defaultValue={el.category} onChange= { HandelCHange}type='text' name='category' placeholder='enter movie/serie category' /><br/>
                <input defaultValue={el.imdbRating}  onChange= { HandelCHange} type='text' name='imdbRating' placeholder='enter movie/serie rating' /><br/>



   </form></Modal.Body>
        <Modal.Footer>
       
          <Button  className='submitButton'  onClick={()=>handleUpdate(el.id)}  >
          Update
          </Button>
        </Modal.Footer>
      </Modal>



      <button  onClick={handleShow} id="editbutton"  >Edit</button> 

      </div>
     )
     }

export default Update;