import React from 'react'

const BookUpdate = ({ book, handleChange, handleUpdateBook} ) => {


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
            <button onClick={handleUpdateBook}>Update Book</button>
        </>
    )
}

export default BookUpdate