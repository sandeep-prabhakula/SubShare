import { Card, Container, Row } from 'react-bootstrap'
function About() {
    const members = [
        {
            id: 1,
            name: "Bharath Mendi",
            qualification: "B.Tech in Electronics and Communictaion Engineering",
            linkedin: "https://www.linkedin.com/in/bharath-mendi-5b063428a/",
            college: "Velagapudi Ramakrishna Siddhartha Engineering College, Vijayawada."
        },
        {
            id: 2,
            name: "Suneel Simhadri",
            qualification: "B.Tech in Electronics and Communictaion Engineering",
            linkedin: "https://www.linkedin.com/in/suneel-simhadri/",
            college: "A1 Global Institute of Engineering and Technology, Markapur."
        },
        {
            id: 3,
            name: "Sandeep Prabhakula",
            qualification: "B.Tech in Electronics and Communictaion Engineering",
            linkedin: "https://www.linkedin.com/in/sandeep-prabhakula/",
            college: "CVR College of Engineering, Hyderabad."
        },

    ]
  return <Container>
            <Row className="gap-5 justify-content-center mt-5">
            {
                members.map((member, memberIndex)=>{
                    return <Card key={memberIndex} style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{member.name}</Card.Title>
                      <Card.Subtitle className="my-2 text-muted">{member.qualification}</Card.Subtitle>
                      <span className='small my-3 d-block'>{member.college}</span>
                      <a href={member.linkedin} target='_blank' >Linkedin</a>
                    </Card.Body>
                  </Card>
                })
            }
            </Row>
        </Container>
}

export default About