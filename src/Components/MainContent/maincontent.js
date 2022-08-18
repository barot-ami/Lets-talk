import React, { Component } from 'react'
import AddnewPost from './Sub-Component/addnewpost';
import Posts from './Sub-Component/posts';
import Stories from './Sub-Component/stories';

class MainContent
 extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='d-block col-12 col-lg-6 pb-5'>
            <Stories/>
            <AddnewPost/>
            <Posts/>
            </div>
         );
    }
}
 
export default MainContent
;