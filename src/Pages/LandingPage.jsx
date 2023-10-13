import React from 'react'
import { Row, Col,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateUrl = useNavigate()
  return (
    <>
      <Row className='mt-5 mb-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={4}>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi non dolores quia ipsum veritatis dolor repellendus possimus impedit ea quae similique dolorum earum esse nulla ipsa numquam iste, assumenda harum.</p>
          <button onClick={()=>navigateUrl('/home')} className='mt-5 btn btn-info'>Get Start<i className="fa-solid fa-arrow-right-long m-2"></i></button>
        </Col>
        <Col></Col>
        <Col lg={6}>
          <img className='img-fluid'  src="https://cdn.dribbble.com/userupload/3153499/file/original-6c8579e657a980f52c32575ae4e70c8a.gif" alt="Landing" />
        </Col>
      </Row>


      <div className="container mb-5 mt-5 d-flex align-items-center justify-content-between w-100 flex-column">
        <h2 className='text-warning'>Features</h2>
        <div className='cards mt-5 mb-5 d-flex d-flex align-items-center justify-content-between w-100'>
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/cc/0e/d3/cc0ed34dd09adf414a19a69b460804f4.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>


          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/c3/c4/d1/c3c4d1f51d7120ae0ef6f5ca62f04ac2.gif" />
            <Card.Body>
              <Card.Title>Categorise Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>


          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ab/45/bb/ab45bb4451536652faca51ae4f42d5dd.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>


        <div className="container border rounded border-secondary p-5 b-5  mb-5 mt-5 d-flex align-items-center justify-content-between w-100"> 
          <div className="contaner me-5 col-lg-5">
            <h3 className='mb-5 fw-bolder text-warning'>Simple, Fast and Powerful</h3>
            <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit fuga quidem sed vero</h6>
            <h6 className='mb-3'><span className='fs-5 fw-bolder'>Categories Videos</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit fuga quidem sed vero</h6>
            <h6 className='mb-3'><span className='fs-5 fw-bolder'>Managing History</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit fuga quidem sed vero</h6>
          </div>
          <div className="video col-lg-6">
          <iframe width="100%" height="390" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

        </div>

      </div>
    </>
  )
}

export default LandingPage