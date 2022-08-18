import React, { Component } from 'react'
import SinglePost from './singlepost';
import {withRouter} from 'react-router-dom'

const url="https://letstalk-subhraneel-backend.herokuapp.com/retrieveposts";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts:''
    }
     }
     renderPost = (data) => {
        if (data)
        {
            return data.map((item) => {
                return (
                    <SinglePost userName={item.name} postdetails={item.postdetails} timestamp={item.timestamp} profilePic="https://source.unsplash.com/collection/happy-people" />
                )
            })
        }
     }
    render() { 
        return ( 
            <>
            {this.renderPost(this.state.posts)}
            </>
         );
    }
    componentDidMount(){
        fetch(url, {method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({posts:data})
        })
    }
}
 
export default withRouter(Posts);