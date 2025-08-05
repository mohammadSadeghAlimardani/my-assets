import React from "react";
import ReactDOM from 'react-dom/client';

/*
#### JSX Rules

1 - return single element
    - <></>
    - <React.Fragment></React.Fragment>
    - semantic elements (section, article)

2 - camelCase property naming convention
    - tabindex => tabIndex
    - for => htmlFor
    - onclick => onClick
    - readonly => readOnly
    - class => className

3 - close every element
    - return <img />
    - return <input />

4 - use pranthesis , otherwise your opening tag must be in the same line wih return

*/
function Greeting(){
    return (
        <React.Fragment>
            <div>
                <h3>hello people</h3>
                <ul>
                    <li>
                        <a href="#">hello world</a>
                    </li>
                </ul>
            </div>
            <h2>hello world</h2>
            <input type="text" name="" id="" />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting/>)