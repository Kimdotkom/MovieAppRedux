import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Button, Form, FormLabel, Modal } from 'react-bootstrap';
import './AddMovie.css'
import { add_movie } from '../../JS/Actions/Actions';

function AddMovie() {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //inisialisation
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rate, setRate] = useState("")
    const [posterUrl, setPosterUrl] = useState("")
    
    //update


    //function add
    const handleAdd = (e) =>{
        e.preventDefault();
        if ((title && description && rate && posterUrl) !== "") {
          dispatch(
            add_movie({ id: Math.random(), title, description, rate, posterUrl })
          );
          handleClose();
        } else {
          alert("you can't add an empty movie");
        }
      };


  return (
    <div className='AddMovie'>
        <Button variant="primary" onClick={handleShow} > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormLabel>Movie Title</FormLabel>
            <Form.Control type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            <FormLabel>Description</FormLabel>
            <Form.Control type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            <FormLabel>Rate</FormLabel>
            <Form.Control type="number" onChange={(e)=>setRate(e.target.value)} value={rate}/>
            <FormLabel>PosterUrl</FormLabel>
            <Form.Control type="url" onChange={(e)=>setPosterUrl(e.target.value)} value={posterUrl}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie