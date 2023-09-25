import React, { useContext } from "react";
import { Store } from "../Data/DataStore";
import { Link, useParams } from "react-router-dom";
import "./TheLatest.css";

function TheLatest() {
  const [BlogData] = useContext(Store);
  const path = useParams ().id
  console.log (path);
  // const categorey = BlogData[parseInt(path)-1].categorey;
  // console.log (categorey);
  return (
  <>
   <div className="latest-home-data">
      <h2>
      The Latest
        <hr className="hr-line"/>
      </h2>

        <div className="dattaa">
        {BlogData.filter(
        (item) =>
          item.id % 4 === 0 &&
          (item.categorey === "Technology")
      ).map((data) => {
        return (
          <>
 <div className="Uni-data">
           <div className="media-latest">
           <Link to={"/Discription/" + data.id} className="link-data">
             
             <div className="whole-data">
             <div className="latest-data">
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
          
             </div>
             {/* <hr /> */}
           </Link>
           </div>
            </div>
          </>
        );
      })}
        </div>
    </div>
  </>
    
  );
}

export default TheLatest;
