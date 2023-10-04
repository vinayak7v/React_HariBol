import React from "react";
import "./Pages.css";

import TheLatest from "../Functionality/TheLatest";
import TopPost from "../Functionality/TopPost";
import TheLatestArticle from "../Functionality/TheLatestArticle";
import LatestStories from "../Functionality/LatestStories";
import Technology from "../assets/future.webp";
// import Bollywood from "./Bollywood";
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
              <img src={Technology} alt="Not found" height={"550px"} width={"100%"} />

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
              <img src={Food} alt="Not found" height={"235px"} width={"100%"} />
            </Link>
          </div>
          <div className="right-part-home">
            <Link to="/Technology">
              <div className="three">
                <h2>Title of Vertical Gallery</h2>
                <p>Technology/1 October</p>
              </div>
              <img src={SecondTech} alt="Not found" height={"240px"} width={"100%"} />

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
          <div className="hatao-home">
          <Link to='/Technology'><div> <img src={Technology} alt="Not Found" height={"400px"} width={"70%"} /></div></Link>
          <div className="bigboy">


            <Link to='/Food'>
              <div className="firstImage">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV37VFqxtnjXqrFXgv1QYD_sQ9gOT3Lubh-A&usqp=CAU" className="badiyaimage" alt='some value' />
                <div className="secondtext">
                  <h2>FOOD</h2>
                  <h5>Tasty Vegitarian dishes for your loved ones</h5>
                </div>
              </div>
            </Link>

            <hr></hr>

            <Link to='/Technology'>
              <div className="secondImage">
                <img src="https://carstreetindia.com/blogs/wp-content/uploads/2022/09/25-1-scaled.jpg" className="badiyaimage" alt='some value' />
                <div className="secondtext">
                  <h2>TECHNOLOGY</h2>
                  <h5>Technology in Bmw amazes the first look in ex showroom </h5>
                </div>
              </div>
            </Link>


            <hr></hr>

            <Link to='/Technology'>
              <div className="thirdImage">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiL47iU5hfiBjJe-eGlFjW_WyioDDowbcZtg&usqp=CAU" className="badiyaimage" alt='some value' />
                <div className="secondtext">
                  <h2>TECHNOLOGY</h2>
                  <h5>Dubai construct to 20 ne skyscrappers by 2050 </h5>
                </div>
              </div>
            </Link>


            <hr></hr>


            <div className="fourthImage">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjlQAANfa6u1heM9Q-uFiegN9NmdSgqckHw&usqp=CAU" className="badiyaimage" alt='some value' />
              <div className="secondtext">
                <h2>BOLLYWOOD</h2>
                <h5> Sanjay Dutt bounces a new movie in Threatre </h5>
              </div>
            </div>
            

          </div>
          </div>
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
