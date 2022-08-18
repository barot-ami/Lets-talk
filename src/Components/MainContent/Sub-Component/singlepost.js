import { Avatar } from '@material-ui/core';
import { Comment, Share, ThumbUp } from '@material-ui/icons';
import React from 'react'
import './singlestory.css'


const SinglePost = ({ image, profilePic, userName, timestamp, postdetails}) => {
    let imagetool;
    if (image!=null){
        imagetool = <img src={image} alt="post image" class="img-fluid rounded"/>
    }
    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp)
    return(
        <div class="bg-white p-4 rounded shadow mt-3">
            <div class="d-flex justify-content-between">
                <div class="d-flex">
                <img
                    src={profilePic}
                    style={{width: "38px", height: "38px", objectFit: "cover"}}
                    alt="avatar"
                    class="rounded-circle me-2"
                  />
                  <div>
                    <p class="m-0 fw-bold">{userName}</p>
                    <span class="text-muted fs-7">{date}</span>
                  </div>
                </div>
                </div>
                <div class="mt-3">
                <div>
                  <p>{postdetails}</p>
                  {imagetool}
                </div>
                </div>
                <div class="d-flex justify-content-around">
                <div class="dropdown-item rounded d-flex justify-content-center align-items-center pointer text-muted p-1">
                        <ThumbUp/>
                          <p class="m-0 ms-2">Like</p>
                </div>
                <div class="dropdown-item rounded d-flex justify-content-center align-items-center pointer text-muted p-1">
                        <Comment/>
                          <p class="m-0 ms-2">Comment</p>
                </div>
                <div class="dropdown-item rounded d-flex justify-content-center align-items-center pointer text-muted p-1">
                        <Share/>
                          <p class="m-0 ms-2">Share</p>
                </div>
                </div>
            </div>
    )
}
 
export default SinglePost;