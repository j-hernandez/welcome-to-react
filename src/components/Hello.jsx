import React from 'react';
import './Hello.css';

export default (props) => (
    <>
        <h1 id="page-title" className='title'>
            Hello {props.name} from our new Component
        </h1>
        <h2>It's great to see you again</h2>
    </>
)

