import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { bookCreate } from '../api/book'

const BookCreate = ({ user, msgAlert }) => {

    const defaultBook = {
        title:'',
        author:''
    }

    const [book, setBook] = useState(defaultBook)
    const [created, setCreated] = useState(false)

    const navigate = useNavigate()

    const handleChange = (event) => {
        setBook({...book, [event.target.name]: event.target.value})
    }

    const handleCreateBook = () => {
        bookCreate(book, user)
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: 'Create Book',
                    variant: 'success'
                })
                setCreated(true)
            })
            .catch(console.error)
    }

    useEffect(()=>{
        if (created) {
            navigate('/books')
        }
    },[created])

    return (
        <>
            <input
            type='text'
            value={book.title}
            name='title'
            onChange = {handleChange}
            />
            <input
            type='text'
            value={book.author}
            name='author'
            onChange = {handleChange}
            />
            <button onClick={handleCreateBook}>Create a Book</button>
        </>
    )
}

export default BookCreate