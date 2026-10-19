import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className = "card"> 
        <div className="top">
          <img src={props.elem.companyImage} alt="broken" />
          <button> save <Bookmark size={16} /></button>
        </div>
        <div className="center">
          <h3>{props.elem.companyName} <span> {props.elem.postedAgo} days ago</span></h3>
          <h2>{props.elem.jobPosition}</h2>
          <div className="skills">
            <h4>{props.elem.jobType}</h4>
            <h4>{props.elem.level}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
              <h4>{props.elem.wage}</h4>
              <p>{props.elem.location}</p>
          </div>
            <button>Apply Now</button>
        </div>
    </div>
  )
}

export default Card