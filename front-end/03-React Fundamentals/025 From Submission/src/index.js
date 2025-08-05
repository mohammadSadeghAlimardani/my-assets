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
            <EventExamples/>
            {books.map((book)=>{
                return (
                    <Book {...book} key={book.id}/>
                )
            })}
        </section>
    )
}

const EventExamples = () => {
    const handleFormInput = (e) => {
        console.log(e);
        console.log(e.currentTarget);
        console.log(e.target);
        console.log(e.target.name);
        console.log(e.target.value);
    }
    const handleButtonClick = () => {
        alert('handle button click');
    }
    const handleFromSubmissin = (e) => {
        e.preventDefault();
        console.log('form submitted');
    }
    return (
        <section>
            <form onSubmit={handleFromSubmissin}>
                <h2>Typical Form</h2>
                <input 
                    type="text" 
                    name="example" 
                    onChange={handleFormInput} 
                    style={{margin : "1rem 0"}}
                />
            </form>
            <button onClick={handleButtonClick}>
                click me
            </button>
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