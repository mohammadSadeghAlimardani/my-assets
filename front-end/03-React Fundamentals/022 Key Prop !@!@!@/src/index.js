import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
const books = [
    {
        author : "Jordan Moore",
        title : 'Intersting Facts For Curious Minds',
        img : "./images/book-1.jpg",
        id : 1  
    },
    {
        author : "James Clear",
        title : 'Atomic Habits',
        img : "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
        id : 2
    }
]

const BookList = () => {
    return (
        <section className="booklist">
            {books.map((book, index)=>{
                /*
                - you will see index, but it's not advised if the list is changing
                - key prop must be equal to a unique value
                - you must set key={id} when you iterate over list and retrun HTML or component
                */
                const {img, title, author, id} = book;
                return (
                    <Book img={img} title={title} author={author} key={id}/>
                )
            })}
        </section>
    )
}

const Book = ({img, title, author}) => {
    return (
        <article className="book">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)