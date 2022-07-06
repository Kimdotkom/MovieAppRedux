import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "../Constants/Actions-types";

export const add_movie = newAdd => {
    return {
        type: ADD_MOVIE,
        payload: newAdd
    }
}

export const delete_movie = id => {
    return {
        type: DELETE_MOVIE,
        payload: id
    }
}


export const edit_movie = (id, newTitle, newDescription, newRate, newPosterUrl) => {
    return {
        type: EDIT_MOVIE,
        payload: {id, newTitle, newDescription, newRate, newPosterUrl}
    }
}

