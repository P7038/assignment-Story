import React from "react";
import { FaFilter } from "react-icons/fa";
import "./EdYodaStories.css";

function EdyodaStories() {
  return (
    <>
      <header id="mainHeader">
        <div id="headerLink">
          <div id="logoPart">
            <h1 id="logoHeading">EDYODA</h1>
            <h3 id="stories">Stories</h3>
          </div>
          <p>Explore Categories</p>
        </div>
        <div id="paraHeader">
          <p id="para">
            EdYoda is a learning and knowledge sharing platform for techies
          </p>
          <a href="https://www.edyoda.com" id="mainPage">
            GO TO MAIN WEBSITE
          </a>
        </div>
      </header>
      <section>
        <h3 id="sectionHeading">Latest Posts</h3>
        <div id="filter">
          <FaFilter style={{color:"blue"}} />
          <h4 className="filterHeading">Filter by Category</h4>
        </div>
        <div id="btns">
          <button className="btn">all</button>
          <button className="btn">artificial intelligence</button>
          <button className="btn">cloud computing</button>
          <button className="btn">DevOps</button>
          <button className="btn">Programming Language</button>
          <button className="btn">Mobile application development</button>
          <button className="btn">technology and tools</button>
          <button className="btn">get a job in a tech company</button>
          <button className="btn">otheres</button>
        </div>
        <div id="cardBlock">
          <div className="ACard">
            <img
              src="https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg"
              alt="img1"
            ></img>

            <div className="text">
              <h3>fresh graduate or IT professional Looking for</h3>
              <span className="name">Arman Ahmed | </span>
              <span className="date">05 jul 2019</span>
              <p className="cardPara">
                If you are a fresh graduate - or new to IT - looking for the
                next job, you need to read this. The last couple of years
                zekeLabs gave me a unique opportunity to assess technology...
              </p>
            </div>
          </div>
          <div className="ACard">
            <img
              src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg"
              alt="img1"
            ></img>
            <div className="text">

            <h3>Introducing you all to EdYoda -www.edyoda.com</h3>
            <span className="name">Arman Ahmed | </span>
            <span className="date">05 jul 2019</span>
            <p className="cardPara">
              If you are a fresh graduate - or new to IT - looking for the next
              job, you need to read this. The last couple of years zekeLabs gave
              me a unique opportunity to assess technology...
            </p>
            </div>
          </div>
          <div className="ACard">
            <img
              src="https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg"
              alt="img1"
            ></img>
            <div className="text">

            <h3>From identity crisis to success story - the...</h3>
            <span className="name">Kalyan Mahalingam | </span>
            <span className="date">05 jul 2019</span>
            <p className="cardPara">
              DevOps is a paradigm shift in the way how software products are
              being built in the modern day Information Technology (IT)
              organizations. It is becoming the de-facto component in...
            </p>
            </div>
          </div>
          <div className="ACard">
            <img
              src="https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg"
              alt="img1"
            ></img>
            <div className="text">

            <h3>Typical day of Data Scientist - An insider story!</h3>
            <span className="name">saurav gosh | </span>
            <span className="date">05 jul 2019</span>
            <p className="cardPara">
              I’ve been a Data Scientist for three years now and I can only say
              that Chris Lynch was right - “ Big Data and Data Science are the
              foundation of all the trends that are emerging in the world....
            </p>
            </div>
          </div>
          <div className="ACard">
            <img
              src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg"
              alt="img1"
            ></img>
            <div className="text">

            <h3>Amazon Web Services (AWS) Cloud Day - ...</h3>
            <span className="name">Kalyan Mahalingam | </span>
            <span className="date">05 jul 2019</span>
            <p className="cardPara">
              It was indeed a hectic day with back to back session sandwiched by
              good food and tea on a lighter note, need to investigate the
              tactics behind the 5-star hotels keeping the plates so...
            </p>
            </div>
          </div>
          <div className="ACard">
            <img
              src="https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg"
              alt="img1"
            ></img>
            <div className="text">

            <h3>edYoda Meetup #01 : A Date with Cloud</h3>
            <span className="name">ashish pandey | </span>
            <span className="date">05 jul 2019</span>
            <p className="cardPara">
              I recently had the opportunity to lead the initiative to organize
              the first Cloud meetup for edYoda. Here, I recount my experience
              in organizing the very first in the series of meetups planned
              by...
            </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default EdyodaStories;
