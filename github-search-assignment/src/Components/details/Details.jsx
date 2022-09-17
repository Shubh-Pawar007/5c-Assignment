import React from 'react' ;
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./details.css" ;

const Details = ({user, img, data}) => {
    console.log(user, img)

  return (
    <>
    <div>
        <div className='card'>
          <div className='top'>
              <h2 className='name'>Name :{user}</h2>
              <img className='circle-img' src={img} alt=""/>
          </div>
      </div>
    </div>
    <div className='moreDetailConatiner'>
        
        {

            data?.map((ele) => {
                return (
                    <>
                    <div className='indDiv'>
                   <h4>Name : <Link to={`/element/${ele.id}`}>{ele.name}</Link> </h4>  
                    <p>Description : {ele.description} </p>
                    <p>CreateTime :{ele.created_at}</p>
                    <hr/>
                    </div>
                    </>
                )
            })
        }
     </div>
    </>
  )
}

export default Details
