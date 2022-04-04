import React, { useEffect } from 'react';
import useReview from '../../useReview';

const Reviews = () => {
    const [review,setReview] = useReview();
    console.log(review);
    return (
        <div>
            <h1>Watch the reviews</h1>
        </div>
    );
};

export default Reviews;