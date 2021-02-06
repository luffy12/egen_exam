import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'
import { Card, Container, Badge } from 'react-bootstrap'
function JobDetail(props) {
    const [currentJob, setCurrentJob] = useState([]);
    const [url,setUrl]=useState("");
    useEffect(() => {
        const fetchItems = async () => {
            const result =props.location.state.job;  
            setCurrentJob(result);
        }
        fetchItems()
    }, []);
    return (
        <Container >
            <Card style={{marginTop:20, backgroundColor:props.darkMode?"#19212D":"#FFFFFF",color:props.darkMode?"#FFFFFF":"#19212D",maxWidth:"75%",left:"15%"}}>

                <Card.Body >
                    <div className="d-flex justify-content-between">
                        <img className="d-none d-md-block" height="50" src={currentJob.company_logo} />
                        <div>
                            <Card.Title> {currentJob.company}</Card.Title>
                            <Card.Subtitle className="text-muted mb-2">
                                {currentJob.title}
                            </Card.Subtitle>
                        </div>
                        <div>
                            <a target="_blank" href={currentJob.company_url}>Company Website</a>
                        </div>
                    </div>


                </Card.Body>
            </Card>
            <Card style={{marginTop:20,backgroundColor:props.darkMode?"#19212D":"#FFFFFF",color:props.darkMode?"#FFFFFF":"#19212D",maxWidth:"75%",left:"15%"}}>
                <Card.Body>
                <div className="d-flex justify-content-between">
                    <div> <Card.Title>
                        {currentJob.title}
                    </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {currentJob.type} - <span> {currentJob.location}</span>
                        </Card.Subtitle></div>
                    <div>
                        <a target="_blank" href={currentJob.how_to_apply}>Apply Now</a>
                    </div>
                </div>
                <div>
                    <Card.Text>
                    <ReactMarkdown source={currentJob.description} />
                    </Card.Text>
                </div>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default JobDetail
