import React from 'react'
import { Card } from 'react-bootstrap'
function About() {
    const members = [
        {
            "id":1,
            "name": "Bharath Mendi",
            "qualification" : "B.Tech in Electronics and Communictaion Engineering",
            "linkedin": "https://www.linkedin.com/in/bharath-mendi-5b063428a/"
        },
        {
            "id":2,
            "name": "Suneel Simhadri",
            "qualification" : "B.Tech in Electronics and Communictaion Engineering",
            "linkedin": "https://www.linkedin.com/in/suneel-simhadri/"
        },
        {
            "id":3,
            "name": "Sandeep Prabhakula",
            "qualification" : "B.Tech in Electronics and Communictaion Engineering",
            "linkedin": "https://www.linkedin.com/in/sandeep-prabhakula/"
        },

    ]
  return (
    <>
        <div className="container d-flex flex-row justify-content-center align-items-center m-5 gap-5">
            {
                members.map((item)=>{
                    return <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{item.qualification}</Card.Subtitle>
                      <Card.Text>
                        
                      </Card.Text>
                      <a href={item.linkedin} target='_blank' >Linkedin </a>
                      
                    </Card.Body>
                  </Card>
                })
            }
        </div>
    </>
  )
}

export default About