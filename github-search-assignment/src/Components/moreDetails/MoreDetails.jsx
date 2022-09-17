import React from 'react'
import { useEffect } from 'react' ;
import {useParams } from "react-router-dom" ;
import axios from "axios" ;
import { useState } from 'react';

const MoreDetails = () => {

  const [data, setData] = useState([]) ;

    const {id} = useParams()
    useEffect(() => {

        axios.get(`https://api.github.com/users/pratikganjale55/repos/${id}`)
        .then((res) => console.log(res.data))
        .catch((e) => console.log(e)) ;

    }, [id])
    console.log(id)
  return (
    <div>
       <h1>details</h1>
    </div>
  )
}

export default MoreDetails
