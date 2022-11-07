import React, {useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { bookDelete, bookShow, bookUpdate } from '../api/book'
import BookUpdate from './bookUpdate'


const BookShow = ({ user, msgAlert }) => {
    const [book, setBook] = useState({})
    const [updateable, setUpdateable] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [updatedBook, setUpdatedBook] = useState({})
    const [deleted, setDeleted] = useState(false)
    const navigate = useNavigate()

    const { id } = useParams()

    const handleChange = (event) => {
        setUpdatedBook({...updatedBook, [event.target.name]: event.target.value})
    }

    const handleUpdateBook = () => {
        bookUpdate(updatedBook, user, id)
            .then(() => {
                setUpdated(true)
            })
            .catch(error => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Update Book Failure' + error,
                    variant: 'danger'
                    })
            })
    }

    const handleDeleteBook = () => {
        bookDelete(user, id)
            .then(() => {
                setDeleted(true)
            })
            .catch(error => {
                msgAlert({
                heading: 'Failure',
                message: 'Delete Book Failure' + error,
                variant: 'danger'
                })
            })
    }

    useEffect(()=>{
        if (deleted || updated) {
            navigate('/books')
        }
    },
    [deleted, updated])

    useEffect(()=>{
        bookShow(user,id)
            .then((res) => {
                setBook(res.data.book)
                setUpdatedBook(res.data.book)
            })
            .catch(error => {
                msgAlert({
                heading: 'Failure',
                message: 'Show Book Failure' + error,
                variant: 'danger'
                })
            })
    },[])

    const toggleShowUpdate = () => {
        setUpdateable((updateable) =>(
            !updateable
        ))
    }



    return (
        <>
            <p>{book.title} was written by {book.author}</p>
            <button onClick={toggleShowUpdate}>Update</button>
            {updateable && (<BookUpdate handleChange={handleChange} handleUpdateBook={handleUpdateBook} book={updatedBook} />)}
            <button onClick={handleDeleteBook}>Delete</button>

        </>
    )
}

export default BookShow