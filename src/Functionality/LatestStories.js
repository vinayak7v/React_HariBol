import React, { useContext } from 'react'
import { Store } from '../Data/DataStore';
import { Link } from 'react-router-dom';
import './LatestStories.css'

function LatestStories() {
    const [BlogData] = useContext(Store);
  return (
<>
<div>
      <h2>
       Latest Stories
        <hr className="hr-line"/>
      </h2>

     <div className='dattaa'>
     {BlogData.filter(
        (item) =>
          item.id % 11 === 0 &&
          (item.categorey === "Technology" || item.categorey === "Food")
      ).map((data) => {
        return (
          <>
 <div className="Uni-data">
          <div className='storiesss'>
          <Link to={"/Discription/" + data.id} className="link-data">
             
             <div className="whole-data">
           
             <div className="img-data">
             {/* <img
               src={data.image}
               alt="Not Found"
               width={300}
               height={200}
               style={{
                 borderRadius: "10px",
                 boxShadow: "0px 0px 4px",
                 marginRight: "5px",
               }}
             /> */}
             </div>
             <div className="head-subhead">
             <h2>{data.heading.slice(0,25)}</h2>
             <p className="subhead-data">{data.subheading.slice(0,100)}</p> {data.categorey} /{data.date}
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
  )
}

export default LatestStories