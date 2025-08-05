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

//option 1 : 
/* 
const BookList = () => {
    return (
        <section className="booklist">
            {books.map((book)=>{
                const {img, title, author} = book;
                return (
                    <Book img={img} title={title} author={author} key={book.id}/>
                )
            })}
        </section>
    )
}

const Book = (props) => {
    const {img, title, author} = props;
    return (
        <article className="book">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    )
}
*/


//option 2 : 
/*
const BookList = () => {
    return (
        <section className="booklist">
            {books.map((book)=>{
                return (
                    <Book book={book} key={book.id}/>
                )
            })}
        </section>
    )
}

const Book = (props) => {
    const {img, title, author} = props.book;
    return (
        <article className="book">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    )
}
*/

//option 3 : 

const BookList = () => {
    return (
        <section className="booklist">
            {books.map((book)=>{
                return (
                    <Book {...book} key={book.id}/>
                )
            })}
        </section>
    )
}

const Book = (props) => {
    const {img, title, author} = props;
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