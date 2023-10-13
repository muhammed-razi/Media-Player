import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'

function Home() {
  const [ServerResponse,setServerResponse] = useState({})
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
      <div className="add-videos">
        <Add setServerResponse={setServerResponse} />
      </div>
      <Link to={'/watch-historys'} className='text-decoration-none text-white'>Watch History</Link>
    </div>

    <div className="container-fulid w-100 mt-5 mb-5 d-flex justify-content-between">
      <div className="all-videos col-lg-8">
        <h3>All Videos</h3>
        <View ServerResponse={ServerResponse} />
      </div>
      <div className="category col-lg-4">
        <Category />
      </div>
    </div>
    </>
  )
}

export default Home