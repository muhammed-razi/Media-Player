import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI'
import VideoCard from './VideoCard'

function View({uploadVideoServerResponse}) {
  const[deleteVideoStatus,setdeleteVideoStatus] = useState(false)
  const [allVideos, setAllVideos] = useState([])
  const getAllUploadedVideo = async () => {
    const { data } = await getAllVideos()
    setAllVideos(data)
  }


  useEffect(() => {
    getAllUploadedVideo()
    setdeleteVideoStatus(false)
  }, [uploadVideoServerResponse,deleteVideoStatus])
  // console.log(allVideos);
  return (
    <>
      <Row>
        {
          allVideos.length > 0 ?
            allVideos.map(video => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <VideoCard displayData={video} setdeleteVideoStatus={setdeleteVideoStatus} />
              </Col>
            ))
            :
            <p>Nothing to display!!!!!!</p>
      }
      </Row>

    </>
    
  )
}

export default View


