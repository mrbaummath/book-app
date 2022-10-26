import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { bookShow, bookUpdate } from '../api/book'
import BookUpdate from './bookUpdate'


const BookShow = ({ user, msgAlert }) => {
    const [book, setBook] = useState({})
    const [updateable, setUpdateable] = useState(false)
    const [updatedBook, setUpdatedBook] = useState({})

    const { id } = useParams()

    const handleChange = (event) => {
        setUpdatedBook({...updatedBook, [event.target.name]: event.target.value})
    }

    const handleUpdateBook = () => {
        bookUpdate(updatedBook, user, id)
            .then(() => {
                setBook(updatedBook)
            })
            .catch(error => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Update Pet Failure' + error,
                    variant: 'danger'
                    })
            })
    }

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

        </>
    )
}

export default BookShow