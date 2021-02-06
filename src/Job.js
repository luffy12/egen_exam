import React, { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { Link} from 'react-router-dom'

export default function Job({ job ,darkMode}) {
  const [open, setOpen] = useState(false)

  return (
    <Card className="mb-3" style={{maxWidth: 345,height:250,backgroundColor:darkMode?"#19212D":"#FFFFFF"}}>
         <Link  to={{ pathname: '/job/'+job.id, state: { job: job} }}>
      
      <Card.Body>
      <img className=" d-md-block" height="50" width="50" style={{objectFit:"contain",position:"absolute",top:"-25px",left:"15%",marginLeft:"-30px",borderRadius:"25px",border:"3px solid #d3d3d3",backgroundColor:"grey"}} alt="" src={job.company_logo} />
        <div className="d-flex justify-content-between" style={{paddingTop:20,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",wordBreak:"break-all",}}>
          <div style={{color:darkMode?"#FFFFFF":"#19212D"}}>
          <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}<span>{" . "+job.type}</span>
            </Card.Subtitle>
            <div>
              {job.title} 
            </div>
            <div>
            {job.company}
            </div>
            <div>{job.location}</div>
            
          </div>
        
        </div>
       
      </Card.Body>
      
</Link>
    </Card>
  )
}