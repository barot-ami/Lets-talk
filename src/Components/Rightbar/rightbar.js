import React, { Component } from 'react'
import SingleContact from './Sub-Component/singlecontact';
import axios from 'axios';

const url = "https://letstalk-subhraneel-backend.herokuapp.com/users";



class Rightbar
 extends Component {
    constructor(props) {
        super(props);

        this.state={
          users:''
      }
    }
    state = {  }
    render() { 
        return ( 
            <div className="d-none d-lg-block" style={{width:"25vw", height:"100%"}}>
                <p class="text-muted fs-5 m-0">Contacts</p>
                <ul class="list-group ms-3">

                <SingleContact listData={this.state.users}/>
              
              </ul>
            </div>
         );
    }
    componentDidMount(){
      axios.get(`${url}`)
          .then((res) => {this.setState({users:res.data})})
  }
}
 
export default Rightbar
;