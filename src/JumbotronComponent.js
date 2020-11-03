import React from 'react';
import {Jumbotron,Button} from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

function JumbotronComponent(){
    retuyrn(
        <div>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>{props.children}</p>
                <p><Button variant="primary">Learn More</Button></p>
            </Jumbotron>
        </div>
    )
}
export default JumbotronComponent;