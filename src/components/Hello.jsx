import React from 'react';
import './Hello.css';

class Hello extends React.Component {

    // Say Hello World from in here

    render() {
        return (
            <h1 className='title'>
                Hello {this.props.name} from our new Component

            </h1>
        )
    }

}

export default Hello;