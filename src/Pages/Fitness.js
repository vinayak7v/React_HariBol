import React, { useContext } from "react";
import { Store } from "../Data/DataStore";
import "./Pages.css";
import { Link } from "react-router-dom";
// import TopPost from "../Functionality/TopPost";
import TopPostFitness from "../Functionality/TopPostFitness";

function Fitness() {
  const [BlogData] = useContext(Store);
  // console.log(BlogData);
  return (
    <div className="main-data">
    <div className="left-side-data">
    <h2>
    Fitness
      <hr className="hr-line" />
    </h2>
    {BlogData.filter((item) => item.categorey === "Fitness").map((data) => {
      // console.log(data)
      return (
        <>
       
  
          <div className="Uni-data">
          <Link to={"/Discription/" + data.id} className="link-data">
           
            <div className="whole-data">
            <div className="img-data">
            <img
              src={data.image}
              alt="Not Found"
              width={300}
              height={200}
              style={{
                borderRadius: "10px",
                boxShadow: "0px 0px 4px",
                marginRight: "5px",
              }}
            />
            </div>
            <div className="head-subhead">
            <h2>{data.heading.slice(0,25)}</h2>
            <p className="subhead-data">{data.subheading.slice(0,100)}</p> {data.categorey} /{data.date}
            </div>
            </div>
            <hr />
          </Link>
          </div>
         
        </>
        
      );
    })}
    <div>load more</div>
    </div>
    <div className="right-side-data"></div>
  <TopPostFitness/>
  </div>
  );
}

export default Fitness;
