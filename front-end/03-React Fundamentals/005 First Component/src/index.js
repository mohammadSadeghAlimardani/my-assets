import React from "react";
import ReactDOM from 'react-dom/client';

//1 : Component function must start with capital letter
//2 : you must return HTML

function Greeting(){
    return <h2>My First Component</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting/>)