import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

/*
#### Local Images 
    - external images ( hosted on different server)
    - public Folder - './images/imageName.extension' instead of './public/images/imageName.extension'
    -
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

const Book = () => {
    return (
        <article className="book">
            <Image/>
            <Title/>
            <Author/>
        </article>
    )
}

const Image = () => <img src="./images/book-1.jpg" alt="Intersting Facts For Curious Minds" />
const Title = () => <h2>Intersting Facts For Curious Minds</h2>
const Author = () => {
    return <h4>Jordan Moore</h4>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)