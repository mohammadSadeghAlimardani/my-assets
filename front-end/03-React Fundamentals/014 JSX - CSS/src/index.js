import React from "react";
import ReactDOM from 'react-dom/client';
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

const Image = () => <img src="./images/book-1.jpg" alt="Intersting Facts For Curious Minds" />
const Title = () => <h2>Intersting Facts For Curious Minds</h2>
const Author = () => {

    /* option 1 : pass object as reference */
    const inlineHeadingStyles = {
        color : '#617d98',
        fontSize : '0.75rem',
        marginTop : '0.5rem'
    }
    return <h4 style={inlineHeadingStyles}>Jordan Moore</h4>

    /* option 2 : pass object directly */
    return <h4 style={{color : '#617d98', fontSize : '0.75rem', marginTop : '0.5rem'}}>Jordan Moore</h4>
    
    // inline styles overwrite the external styles
    // key : we dont have hyphen (fontSize)
    // values : string
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)