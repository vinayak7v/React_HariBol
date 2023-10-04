import React, { useContext } from "react";
import {  useParams } from "react-router-dom";
import { Store } from "../Data/DataStore";
import { BsFillShareFill } from "react-icons/bs";
import { PiHandsClappingLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import UserLogo from "../assets/UserLogo.jpeg";
import "./Discrip.css";
// import TheLatest from "../Functionality/TheLatest";

const Discription = () => {
  const [BlogData] = useContext(Store);
  const { id } = useParams();
  console.log(id);
  // const [BlogData] = useContext(Store);
  // const [BlogData] = useContext(Store);
  const path = useParams ().id
  const categorey = BlogData[parseInt(path)-1].categorey;
  
  console.log(BlogData);
  return (
    <div className="MainDisc">
      <div className="disc-head">
        {/* <div>The Serine</div>
        <div>
          <button>Get Started</button>
        </div> */}
      </div>
<div className="Disc-data-parts">
<div className="First-disc-data">
      <div className="Icons-bar">
        <div className="upper-Icon">
          <PiHandsClappingLight />
          <p>8.5k Claps</p>
        </div>
        <div className="lower-Icon">
          <BsFillShareFill />
          <p>share this Article</p>
        </div>
      </div>
      </div>  
        <div className="second-detail-data">

      {BlogData.filter((item) => item.id === id).map((data) => {
        console.log(data);
        return (
          <>
            <div className="Disc-whole-data1">
              <div>
                <h2>{data.heading}</h2>
              </div>
              <div className="Social-Icone-bar">
                <div className="user-img-name">
                  <div className="usericon">
                    <img
                      src={UserLogo}
                      alt=""
                      style={{ width: 50, height: 50 }}
                    />
                  </div>
                  <div className="use-name">
                    <p>Vinayak</p>
                    <p>16-Aug-2023 |8 min read </p>
                  </div>
                </div>

                <div className="Social-Icon-set">
                  <BsFacebook />
                  <BiLogoInstagramAlt />
                  <AiOutlineTwitter />
                  <AiFillYoutube />
                </div>
              </div>
              <div className="Image-section">
              <img
                src={data.image}
                alt="Not Found"
                width={400}
                height={300}
                style={{
                  borderRadius: "10px",
                  boxShadow: "0px 0px 4px",
                  marginRight: "5px",
                }}
              />
              </div>
              <div className="news-discription">
                <p>{data.details}</p>
              </div>
              <div className="clap-section">
                <PiHandsClappingLight />
                <p>6.9K</p>
              </div>
              <hr />
              <div className="USER-DETAILS">
                <div className="user-img-name">
                  <div className="usericon">
                    <img
                      src={UserLogo}
                      alt="icon"
                      style={{ width: 50, height: 50 }}
                    />
                  </div>
                  <div className="use-name">
                    <p>Vinayak</p>
                    <p>16-Aug-2023 :8 min read </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}

</div>
</div>
      <div className="Latest-news">
        <div>More from The Siren</div>
        <hr />
       
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
          (item.categorey === categorey)
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
    
      </div>
    </div>
  );
};

export default Discription;
