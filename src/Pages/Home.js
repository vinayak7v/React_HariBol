import React from "react";
import "./Pages.css";

import TheLatest from "../Functionality/TheLatest";
import TopPost from "../Functionality/TopPost";
import TheLatestArticle from "../Functionality/TheLatestArticle";
import LatestStories from "../Functionality/LatestStories";
import Technology from "../assets/future.webp";
import Food from "../assets/dessert.jpg";
import SecondTech from "../assets/lambo.webp";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-first">
        <div className="left-section">
          <div className="left-part-home">
          <Link to="/Technology">
            <div className="one">
              <h1>Title of Vertical Gallery</h1>
              <p>Technology/1 October</p>
            </div>
            <img src={Technology} alt="Not found"  height={"550px"} width={"100%"} />
          </Link>
          </div>
        </div>


        <div className="right-section">
          <div className="right-part-home">
          <Link to="/Food">
            <div className="two">
              <h2>Title of Vertical Gallery</h2>
              <p>Technology/1 October</p>
            </div>
            <img src={Food} alt="Not found" height={"235px"} width={"100%"}/>
          </Link>
          </div>
          <div className="right-part-home">
          <Link to="/Technology">
            <div className="three">
              <h2>Title of Vertical Gallery</h2>
              <p>Technology/1 October</p>
            </div>
            <img src={SecondTech} alt="Not found" height={"240px"} width={"100%"}/> 
          </Link>
          </div>
        </div>
      </div>


      {/*------------------- TheLatest-part--------------- */}
      <div className="the-latest-area">
        <TheLatest />
      </div>
      {/*---------1.Main-div---------- Four-Section--------------- */}
      {/*---------+* Child1----------- TheLatestArticel-part--------------- */}
      {/*------------------- ----------Image--------------- */}
      {/*----------+*Child2----------- Top-part--------------- */}
      {/*----------------------------- Advertising--------------- */}

      <div className="section-head">
        <div className="left-child">
          <TheLatestArticle />
          <Link to='/Technology'><div> <img src={Technology} alt="Not Found" height={"400px"} width={"100%"} /></div></Link>
        </div>
        <div className="Right-child">
          <TopPost />
        </div>
      </div>

      {/* -----------------------------Latest-Stories-part---------------- */}
      <div className="Stories">
        <LatestStories />
      </div>
    </>
  );
}

export default Home;
