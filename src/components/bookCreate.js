import React, { useState } from 'react'
import { bookCreate } from '../api/book'

const BookCreate = ({ user, msgAlert }) => {

    const defaultBook = {
        title:'',
        author:''
    }

    const [book, setBook] = useState(defaultBook)

    const handleChange = (event) => {
        setBook({...book, [event.target.name]: event.target.value})
    }

    const handleCreateBook = () => {
        bookCreate(book, user)
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: 'Create Pet',
                    variant: 'success'
                })
            })
            .catch(console.error)
    }

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