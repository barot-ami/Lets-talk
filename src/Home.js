import React, { Component } from 'react'
import './Home.css'
import Header from './Components/Header/header';
import Sidebar from './Components/Sidebar/sidebar';
import MainContent from './Components/MainContent/maincontent';
import Rightbar from './Components/Rightbar/rightbar';
import {withRouter} from 'react-router-dom'


const url = "https://letstalk-subhraneel-backend.herokuapp.com/register";
const url2 = "https://letstalk-subhraneel-backend.herokuapp.com/login";
const url3 = "https://letstalk-subhraneel-backend.herokuapp.com/userInfo";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state={
          name:'',
          email:'',
          password:'',
          email_login:'',
          password_login:'',
          userData:'',
            userImg:'',
            userName:'',
            message_register:'',
            message_login:''
      }
    }
    handleChange =(event)=>{
      this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = () => {
    fetch(url,{
        method:'POST',
        headers:{
            'accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(this.state)
    })
    .then(this.props.history.push('/'))
}

handleLogin = () => {
  fetch(url2,{
      method:'POST',
      headers:{
          'accept':'application/json',
          'Content-Type':'application/json'
      },
      body:JSON.stringify(this.state)
  })
  .then((res) => res.json())
  .then((data) => {
      if(data.auth === false){
          this.setState({message_login:data.token})
      }else{
          sessionStorage.setItem('ltk',data.token)
          this.props.history.push('/')
      }
  })
}
conditionalHeader = () =>{
  if (sessionStorage.getItem('ltk')){

      let data = this.state.userData;
      let outArray = [data.name, data.email];
      sessionStorage.setItem('userinfo',outArray);
      sessionStorage.setItem('loginStatus',true)


      return(
        <>
        <Header/>
    <div class="d-flex">
    <Sidebar/>
    <MainContent/>
    <Rightbar/>
    </div>
        </>
      )
    
  }else{
    return ( 
      <div class="container">
      <div class="row" style={{height:"100vh"}}>
      <div class="left col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
              <div>
              <h1>let's talk</h1>
              <p>let's talk helps you connect and share with the people in your life.</p>
          </div>
          </div>
          <div class="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
              <div class="right">
              <div class="card shadow p-3">
                  <div class="card-body">
                  <h3 style={{color:'red'}}>{this.state.message_login}</h3>
                      <div class="mb-3">
                          <input id="email_login" name="email_login" type="email" className="form-control" placeholder="E-Mail" value={this.state.email_login} onChange={this.handleChange}/>
                        </div>
                        <div class="mb-3">
                          <input id="password_login" name="password_login" type="password" className="form-control" placeholder="Password" value={this.state.password_login} onChange={this.handleChange}/>
                        </div>
                        <button class="btn btn-primary" id="login_button" type="button" onClick={this.handleLogin}>Log In</button>
                    <a href="#" class="d-flex justify-content-center" id="forgot">Forgotten Password?</a>
                    <hr/>
                    <div class="d-flex justify-content-center">
                    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#create_account" id="account_button" type="button">Create New Account</button>
                  </div>
                  </div>
                </div>
                <div class="pt-3 d-flex justify-content-center">
                  <a href="#" id="create" style={{fontSize:"2vh"}}>Create a Page</a>
                  <p style={{fontSize:"2vh"}}>&#160;for a celebrity, brand or business.</p></div>
              </div>
          </div>
      </div>
      <div class="modal fade" id="create_account" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Create an Account</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body" id="modalbody">
    <form>
      <div class="mb-3">
          <input id="name" name="name" type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
      </div>
      <div class="mb-3">
          <input id="email" name="email" type="email" className="form-control" placeholder="E-Mail" value={this.state.email} onChange={this.handleChange}/>
      </div>
      <div class="mb-3">
          <input id="password" name="password" type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
      </div>
      <button class="btn btn-primary" id="signup" onClick={this.handleSubmit} type="button">Create an Account</button>
      </form>
    </div>
    
  </div>
</div>
</div>
      </div>
   );
  }
}
    render() { 
      return(
        <>
        {this.conditionalHeader()}
        </>
      )
    }

    componentDidMount(){

      /* Login With JWT */
      fetch(url3,{
          method: 'GET',
          headers:{
              'x-access-token':sessionStorage.getItem('ltk')
          }
      })
      .then((res) =>  res.json())
      .then((data) => {
          this.setState({
              userData:data
          })
      })
      
  }
}
 
export default withRouter(Home);