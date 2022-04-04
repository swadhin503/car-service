import React from 'react';
import logo from '../../images/download (3).jpg';
import useReview from '../../useReview';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    const [reviews,setReviews]=useReview();
    return (
        <div>
            <div className="container">
                <div className="text-container">
                    <h1 className="first-title">Welcome To Our Page 
                    <br /> <span className="second-title">Watch Your Favorite Car</span></h1>
                    <p>This is an amazing website to explore and know about different cars. You can also check and give reviews in our website. Hope you will feel great by using our website.</p>
                    <button className="btn">Watch Demo</button>
                    </div>
                <div className="img-container">
                    <img src={logo} alt="" />
                </div>
          </div>
          <div className="review-container">
            {
                reviews.slice(0,3).map(review=> <Review key={review.id} review={review}></Review>)
            }
          </div>
        </div>
    );
};

export default Home;