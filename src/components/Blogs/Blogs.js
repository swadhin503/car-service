import React from 'react';
import './Blogs.css'

const Blogs = () => (
    <div className="blogs-container">
        <div className="blogs">
            <h2>What is context Api?</h2>
            <p>
                The new React Context API, introduced with React v.16.3, allows us to pass data through our component trees, giving our components the ability to communicate and share data at different levels. In this tutorial, we’ll explore how we can use React Context to avoid prop drilling. First, we’ll cover what prop drilling is and why we should avoid it.
            </p>
        </div>
        <div className="blogs">
            <h2>What is semantic tag?</h2>
            <p>The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser.These elements clearly define its content.</p>
        </div>
        <div className="blogs">
            <h2>Inline Elements</h2>
            <p>Inline elements are those which only occupy the space bounded by the tags defining the element, instead of breaking the flow of the content. Note: An inline element does not start on a new line and only takes up as much width as necessary.</p>
        </div>
        <div className="blogs">
            <h2>Block Elements</h2>
            <p>A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.

            A block-level element always takes up the full width available (stretches out to the left and right as far as it can).</p>
        </div>
        <div className="blogs">
            <h2>Inline-Block Element</h2>
            <p>Displays an element as an inline-level block container. You CAN set height and width values.</p>
        </div>
    </div>
);

export default Blogs;