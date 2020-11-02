import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import { Media } from 'reactstrap'
import Rating from './Rating';
import { Media } from 'react-bootstrap'

const Product = () => {
    return(
        <div>
            <Media>
      <Media left href="#">
        <Media object data-src={propTypes.data.imageUrl}alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          {props.data.productName}
        </Media>
        {props.data.releasedDate}
            <Rating rating={props.data.rating} numOfReviews={props.data.numOfReviews}/>
        <p>{props.data.description}</p>
      </Media>
    </Media>
        </div>
    );
}

export default Product;