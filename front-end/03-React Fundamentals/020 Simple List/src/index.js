import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
const books = [
    {
        author : "Jordan Moore",
        title : 'Intersting Facts For Curious Minds',
        img : "./images/book-1.jpg"
    },
    {
        author : "James Clear",
        title : 'Atomic Habits',
        img : "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg"
    }
]

/* 
map - returns a new array from calling a function , 
for every array element
*/

const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) => {
    return <h1>{name}</h1>;
})

const BookList = () => {
    return (
        <section className="booklist">
            {newNames}
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