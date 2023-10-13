import React,{useState} from 'react'
import {Card,Modal} from 'react-bootstrap';
import { addToHistory, deleteAVideo, getAllVideos } from '../services/allAPI';


function VideoCard({displayData,setdeleteVideoStatus,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
  setShow(true);
// make api call http://localhost:4000/history
const {caption,embedLink}= displayData
let today = new Date()
let timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
let videoDetails = {
  caption,embedLink,timeStamp
}
await addToHistory(videoDetails)
}

  const handleDelete = async (id)=>{
    // make api call
    await deleteAVideo(id)
    setdeleteVideoStatus(true)
    
  }

  const dragStarted = (e,id)=>{
    console.log("Drag started.. videoId: "+id);
    e.dataTransfer.setData("videoId",id)
  }


  return (
    <>
    <Card className='mb-3' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
      <Card.Img  variant="top" height={'180px'} onClick={handleShow} src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayData?.caption}</h6>
          {insideCategory?"": <button onClick={()=>handleDelete(displayData?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>}
        </Card.Title>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe className='w-100' height={'360px'} src={`${displayData?.embedLink}?autoplay=1`} title="How To Create Dynamic Pages in React" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard