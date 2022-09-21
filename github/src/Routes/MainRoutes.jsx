import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Commponents/HomePage'
import FollowersRepo from './../Commponents/FollowersRepo';

const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/followers/:url' element={<FollowersRepo/>}/>
    </Routes>
    </>
  )
}

export default MainRoutes