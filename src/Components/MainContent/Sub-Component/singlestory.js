import { Avatar } from '@material-ui/core';
import React from 'react'
import './singlestory.css'

const SingleStory = ({ image, profilePic, userName}) => {
    return(
        <div className="story" style={{backgroundImage: `url(${image})`}}>
            <Avatar className="profilepic" src={profilePic}/>
            <h5>{userName}</h5>
        </div>
    )
}
 
export default SingleStory;