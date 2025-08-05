import React from "react";
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from "./books";    /*import as name : data's name must be same with export, and we must use {} */
import Book from "./Book";          /*import as default : data's name does not need the same with export*/

//we have only one (export default) per file

const BookList = () => {
    return (
        <section className="booklist">
            {books.map((book)=>{
                return (
                    <Book {...book} key={book.id} />
                )
            })}
        </section>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)