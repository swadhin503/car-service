import React, { useEffect } from 'react';
import useReview from '../../useReview';
import Review from '../Review/Review';

const Reviews = ({review}) => {
    const [reviews,setReviews] = useReview();
    // console.log(review);

    return (
        <div>
           {
             reviews.map(review => <Review key={review.id} review={review}></Review> )
           }
        </div>
    );
};

export default Reviews;