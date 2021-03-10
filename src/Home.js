import React from 'react';
import './App.css';
import {Carousel} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import {CardDeck} from 'react-bootstrap'
import { Fragment } from 'react';
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'

const Home=()=>{

    return(
      <Fragment>
        <Row className="my-3">   
      <Container>
         <Carousel fade>
        <Carousel.Item className="carousal-bd">
          <img
            className="d-block w-100"
            src="./hm1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carousal">
            <h3>Fast Cars</h3>
            <p>Dont Drive Fast , Just Drive Comfortably</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousal-bd">
          <img
            className="d-block w-100"
            src="./hm2.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption className="carousal">
            <h3>Planet Earth</h3>
            <p>Most Probably the Only thing where Life Exists</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousal-bd">
          <img
            className="d-block w-100"
            src="./hm3.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption className="carousal">
            <h3>Graphics</h3>
            <p>Revolutionizing Our Todays Concept of Visuals and Sights</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     
      </Container>
      </Row>
      <Row className="my-3">
      <Container> 
      <CardDeck>
  <Card className="card" bg="dark">
    <Card.Img variant="top" src="./cd1.jpg" />
    <Card.Body className="card-text">
      <Card.Title>Batman</Card.Title>
      <Card.Text>
        A fictional Superhero Character without any powers , just bravery and wisdom.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="dark">
    <Card.Img variant="top" src="./cd2.jpg" />
    <Card.Body className="card-text">
      <Card.Title>Hulk</Card.Title>
      <Card.Text>
       A fictional Super Hero Character with Intense Physical Brute Strength.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="dark">
    <Card.Img variant="top" src="./cd3.jpg" />
    <Card.Body className="card-text">
      <Card.Title>BMW</Card.Title>
      <Card.Text>
       A Real Car
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
</Container>
</Row> 
      </Fragment>
    );}
export default Home;    