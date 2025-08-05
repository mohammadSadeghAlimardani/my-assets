import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook = {
    author : "Jordan Moore",
    title : 'Intersting Facts For Curious Minds',
    img : "./images/book-1.jpg"
}
const secondBook = {
    author : "James Clear",
    title : 'Atomic Habits',
    img : "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg"
}

/* 
if we write something between the component tags,
we can access them by {props.children} in function body 
*/
const BookList = () => {
    return (
        <section className="booklist">
            <Book 
                author={firstBook.author}
                title={firstBook.title} 
                img={firstBook.img}
            >
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolor omnis consequatur mollitia ipsum cupiditate error
                    libero repudiandae quaerat nulla nam.
                </p>
                <button>click me</button>
            </Book>
            <Book 
                author={secondBook.author}
                title={secondBook.title}
                img={secondBook.img}
            />
        </section>
    )
}
//name must be 'children' not anything else
const Book = ({img, title, author, children}) => {
    return (
        <article className="book">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            {children}
        </article>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)