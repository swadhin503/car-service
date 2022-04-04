import React from 'react';
import './Review.css'

const Review = (props) => {
 const {name,review,rating} = props.review;
 console.log(props.review)
    return (
        <div className="review-container">
            <h3>{name}</h3>
            <p>Review: <small>{review}</small></p>
            <p>Ratings: {rating}</p>
        </div>
    );
};

export default Review;