import React from "react";
import blogOne from "../../images/blog1.webp";
import blogTwo from "../../images/blog2.webp";
import blogThree from "../../images/blog3.webp";
import blogFour from "../../images/blog4.webp";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="blog" id="blog">
      <div className="container">
        <div className="info">
          <h4>From our blog</h4>
          <p>Latest news & events</p>
        </div>
        <div className="container text-center blogInfo">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src={blogOne} alt="Blog One" />
              <div className="info">
                <p>Lorem ipsum dolor sit.</p>
                <h6>December 2, 2023</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src={blogTwo} alt="Blog Two" />
              <div className="info">
                <p>Lorem ipsum dolor sit.</p>
                <h6>December 2, 2023</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src={blogThree} alt="Blog Three" />
              <div className="info">
                <p>Lorem ipsum dolor sit.</p>
                <h6>December 2, 2023</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src={blogFour} alt="Blog Four" />
              <div className="info">
                <p>Lorem ipsum dolor sit.</p>
                <h6>December 2, 2023</h6>
              </div>
            </div>
          </div>
        </div>
        <button>More articles</button>
      </div>
    </div>
  );
};

export default Blog;
