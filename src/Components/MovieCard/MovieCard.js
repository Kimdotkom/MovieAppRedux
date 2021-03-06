import React from 'react'
import { Button, Card } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'
import { useDispatch } from 'react-redux'
import { delete_movie } from '../../JS/Actions/Actions'
import EditMovie from '../EditMovie/EditMovie'
import './MovieCard.css'

function MovieCard({movie}) {
const dispatch= useDispatch();

  return (
    <div className='moviecard'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterUrl} className='imgcard'/>
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text className='cardtext'>{movie.description}</Card.Text>

    {/* <Button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>Edit</Button> */}

    <EditMovie movie={movie}/>

    <Button className='deletebtn' variant='danger' onClick={()=> dispatch(delete_movie(movie.id))}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
</svg>Delete</Button>

    <Card.Text >{movie.rate} Star(s)</Card.Text>
    <ReactStars value={movie.rate} edit={false}></ReactStars>
    
  </Card.Body>
</Card>
    </div>
  )
}

export default MovieCard