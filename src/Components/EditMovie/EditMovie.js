import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, FormLabel, Modal } from "react-bootstrap";
import { edit_movie } from "../../JS/Actions/Actions";

const EditMovie = ({movie}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()

    const [newTitle, setNewTitle] = useState(movie.title);
    const [newDescription, setNewDescription] = useState(movie.description);
    const [newRate, setNewRate] = useState(movie.rate);
    const [newPosterUrl, setNewPosterUrl] = useState(movie.posterUrl);

    const newMovie= {newTitle, newDescription, newRate, newPosterUrl};

    const handleEdit = (e) => {
        e.preventDefault();
      dispatch(edit_movie(movie.id, newTitle, newDescription, newRate, newPosterUrl));
      handleClose();
    };

  return (
    <div>
      <Button  onClick={handleShow} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-pencil-fill"
          viewBox="0 0 16 16"
        >
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
        </svg>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormLabel>Movie Title</FormLabel>
            <Form.Control type="text" onChange={(e) => setNewTitle(e.target.value)} value={newTitle} />
            <FormLabel>Description</FormLabel>
            <Form.Control type="text" onChange={(e) => setNewDescription(e.target.value)} value={newDescription} />
            <FormLabel>Rate</FormLabel>
            <Form.Control type="number" onChange={(e) => setNewRate(e.target.value)} value={newRate} />
            <FormLabel>PosterUrl</FormLabel>
            <Form.Control type="url" onChange={(e) => setNewPosterUrl(e.target.value)} value={newPosterUrl} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default EditMovie;
