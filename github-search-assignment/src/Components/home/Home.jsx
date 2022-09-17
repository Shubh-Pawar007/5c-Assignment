import axios from 'axios';
import React from 'react' ;
import { useState } from 'react';
import { useEffect } from 'react';
import Details from '../details/Details';
import "./home.css" ;

const Home = () => {
  
    const [data, setData] = useState([]) ;
    const [name, setName] = useState("") ;
    const [user, setUser] = useState() ;
    const [img, setImag] = useState() ;

   
    
    
    let arr = [] ;
    
    const handleSubmit = (e) => {
        e.preventDefault() ;
        axios.get(`https://api.github.com/users/${name}/repos`)
            .then((res) => setData(res.data))
            console.log(data);
            data.map((elem) => {
                let uname = elem.owner.login ;
                arr.push(uname)
                let img = elem.owner.avatar_url ;
                arr.push(img)
            })

          setUser(arr[0]) 
          setImag(arr[1])
            
            
    }
  
   
  return (
    <>
    <div>
      <input type="text" id="input" placeholder='username...' onChange={(e) => setName(e.target.value)}/>
      <button type="submit" className='serachButton' onClick={handleSubmit}>Search</button>
    </div>
    <div className='cardContainer'>
       
       <Details user={user} img={img} data={data} />

        
    </div>
    </>
  )
}

export default Home

