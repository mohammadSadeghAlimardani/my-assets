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

const BookList = () => {
    return (
        <section className="booklist">
            <Book 
                author={firstBook.author}
                title={firstBook.title} 
                img={firstBook.img}
            />
            <Book 
                author={secondBook.author}
                title={secondBook.title}
                img={secondBook.img}
            />
        </section>
    )
}

/* access prop in function body */

//option 1:
const Book = (props) => {
    return (
        <article className="book">
            <img src={props.img} alt={props.title} />
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
        </article>
    )
}

//option 2:
// const Book = (props) => {
//     const {img, title, author} = props;
//     return (
//         <article className="book">
//             <img src={img} alt={title} />
//             <h2>{title}</h2>
//             <h4>{author}</h4>
//         </article>
//     )
// }

//option 3:
// const Book = ({img, title, author}) => {
//     return (
//         <article className="book">
//             <img src={img} alt={title} />
//             <h2>{title}</h2>
//             <h4>{author}</h4>
//         </article>
//     )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)