import React from 'react';
import './Hello.css';

function Hello(props) {
    return (
        <h1 className='title'>
            Hello {props.name} from our new Component
        </h1>
    )
}

export default Hello;