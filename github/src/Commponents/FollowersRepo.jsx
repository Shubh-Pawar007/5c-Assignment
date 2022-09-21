import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getFollowerRepo } from '../ReduxFiles/action';
import style from "./Home.module.css"

const FollowersRepo = () => {

    const data= useSelector((state)=> state.reducer.followerRepo)
    console.log(data);
    const[followerRepo,setFollowerRepo]= useState([])
    const dispatch= useDispatch()

    const {url}= useParams() 
    console.log(url);
    useEffect(()=>{
        dispatch(getFollowerRepo(url))
    },[])
  return (
    <>
    <center><h1>Followers Repositories</h1></center>
    <center><Link to="/"><button style={{height:"60px",fontSize:"20px",borderRadius:"10px",margin:"10px",cursor:"pointer"}}>Go To Home</button></Link></center>
    <div className={style.repositories}>
          {data?.map((el) => (
            <div key={el.id}>
              <img src={el.owner.avatar_url} alt="" />
              <div>
                <h3>{el.name}</h3>
                <p>{el.description}</p>
              </div>
            </div>
          ))}
        </div>
    </>

  )
}

export default FollowersRepo