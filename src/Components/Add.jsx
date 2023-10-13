import { React, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setuploadVideoServerResponse}) {
  const [show, setShow] = useState(false);
  const [video,setVideo] = useState({
    id:"",caption:"",url:"",embedLink:""
  })
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedLink=(e)=>{
    const {value} =e.target
    if(value){
      const link = `http://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedLink:link})
    }else{
      setVideo({...video,embedLink:""})
    }
    
  }
  console.log(video);
  const handleUpload= async (e)=>{
    const {id,caption,url,embedLink} = video
    if(!id || !caption || !url || !embedLink)
    {
      toast.warning("Please fill the form completel!!!");
    }else{
      // make API call upload video
      const response = await uploadVideo(video)
      // console.log(response);
      if(response.status>=200 && response.status<300){
        // success msg
        toast.success(`'${response.data.caption}' video uploaded successfully`)
        // serverset
        // setServerResponse(response.data)
        // reset video
        setVideo({
          id:"",caption:"",url:"",embedLink:""
        })
        // model hide
        handleClose()
      }else{
        // console.log(response);
        toast.error("Can not perform the action......")
      }
    }
  }
  console.log(video);

  return (
    <>
      <div className='d-flex'>
        <h5>Upload New Videos</h5>
        <button onClick={handleShow} className='btn'><i className="fa-solid fa-circle-plus fs-5"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload New Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the Following Details</p>
          <Form className='border border-secondary rounded p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Id" onChange={(e)=>setVideo({...video,id:e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e)=>setVideo({...video,url:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter YouTube Video Link" onChange={getEmbedLink}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload} >Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoclose={2000} />
    </>
  )
}

export default Add