import React, { Component } from 'react'
import SingleStory from './singlestory';

class Stories extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='d-flex gap-2'>
            <SingleStory image='https://source.unsplash.com/random/3' profilePic='https://source.unsplash.com/random/2' userName='Hello'/>
            <SingleStory image='https://source.unsplash.com/random/4' profilePic='https://source.unsplash.com/random/5' userName='Hello'/>
            
            </div>
         );
    }
}
 
export default Stories;