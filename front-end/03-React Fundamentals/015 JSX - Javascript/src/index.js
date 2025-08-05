import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

/*
- {} in JSX means going back to JS LAND
- value inside must be an expression (return value), can't be a statement
*/
const BookList = () => {
    return (
        <section className="booklist">
            <Book/>
            <Book/>
            <Book/>
        </section>
    )
}
const author = "Jordan Moore";
const Book = () => {
    const title = 'Intersting Facts For Curious Minds';

    return (
        <article className="book">
            <img src="./images/book-1.jpg" alt="Intersting Facts For Curious Minds" />
            <h2>{title}</h2>
            <h4>{author.toUpperCase()}</h4>

            {/* below example is working because it returns a value */}
            <p>{6 + 6}</p>

            {/* below example does not work because it is a statement */}
            {/* <p>{let x = 6}</p> */}

        </article>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)