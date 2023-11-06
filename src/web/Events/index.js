import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Roka from './Roka';
import Engagement from './Engagement';
import Ladiesreception from './LadiesReception'
import Wedding from './Wedding';
import './index.scss';

const Events = (props) => {
  const upcommingEvents = [
    {
      id: "112623", title: "Engagement", description: ``, component:<Engagement/> ,load: true
    },
    { id: "110224", title: "Ladies reception", description: 'any description', component: <Ladiesreception/>, load: false },
    { id: "110424", title: "Wedding", description: 'any description', component:<Wedding/>, load: false }
  ]

  const previosEvents = [
    { id: "100224", title: "Roka", description: 'any description', component: <Roka/>, load: false }
  ]

  return (
    <div className='mt-3'>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body >
          <Card.Title className='text-center'><h3>Please confirm your availabilty for upcomming events.</h3></Card.Title>
          <Accordion defaultActiveKey="0">
            {upcommingEvents?.map(item => {
              return (
                <Accordion.Item eventKey={item.id}>
                  <Accordion.Header><h5>{item.title}</h5></Accordion.Header>
                  <Accordion.Body className='text-center'>
                    {item.component}
                  </Accordion.Body>
                </Accordion.Item>
              )
            })}

          </Accordion>

          {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>

      <Card className='mt-3' >
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body >
          <Card.Title className='text-center'><h3>Some memorable glimps of previous events.</h3></Card.Title>
          <Accordion defaultActiveKey="0">
            {previosEvents?.map(item => {
              return (
                <Accordion.Item eventKey={item.id}>
                  <Accordion.Header><h5>{item.title}</h5></Accordion.Header>
                  <Accordion.Body className='text-center'>
                    {item.component}
                  </Accordion.Body>
                </Accordion.Item>
              )
            })}
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  )
}


export default Events;