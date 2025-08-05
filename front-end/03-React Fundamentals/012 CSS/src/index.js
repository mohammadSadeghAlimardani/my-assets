import React from "react";
import ReactDOM from 'react-dom/client';

//javascript files does not need extension
//css file does need extension file (import './index.css')
import './index.css';

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

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg" alt="Intersting Facts For Curious Minds" />
const Title = () => <h2>Intersting Facts For Curious Minds</h2>
const Author = () => {
    return <h4>Jordan Moore</h4>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)