import React from 'react'
import SingleBook from './SingleBook';

function Books(props) {

    
    return (
        <>
            {
                props.myBooks.map((book)=>{
                    return <SingleBook singleOne={book}  
                    deleteBookValue={props.deleteBookValue}  
                    updateBookValue={props.updateBookValue}/>
                })
            }
        </>
    )
}

export default Books;
