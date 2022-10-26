import React, { useEffect, useState } from 'react' 
import { bookIndex } from '../api/book'
import { Link } from 'react-router-dom'

const BookIndex = ({ user, msgAlert }) => {

    const [allBooks, setAllBooks] = useState([])

    useEffect(() => {
        bookIndex(user)
        .then(res => {
            setAllBooks(res.data.books)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Books Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const allBooksJSX = allBooks.map(book => {
        return (
            <Link key={book._id} to={book._id}>
            <li >{book.author}: {book.title}</li>
            </Link>
        )
    })

    return (
        <>
            <ul>{allBooksJSX}</ul>
        </>
    )
}

export default BookIndex