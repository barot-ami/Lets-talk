import { EmojiEmotions, InsertPhoto } from '@material-ui/icons';
import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
const post_url = "http://localhost:9100/addpost";
let name_loggedin = sessionStorage.getItem('userinfo')?sessionStorage.getItem('userinfo').split(',')[0]:'';
let email_loggedin = sessionStorage.getItem('userinfo')?sessionStorage.getItem('userinfo').split(',')[1]:'';

class AddnewPost extends Component {
    constructor(props) {
        super(props);

        this.state={
          name:name_loggedin,
          email:email_loggedin,
          postdetails:'',
          timestamp:Date.now()
        }

    }

    handleChange =(event)=>{
      this.setState({[event.target.name]:event.target.value})
  }

  handlepost = () => {
    fetch(post_url,{
        method:'POST',
        headers:{
            'accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(this.state)
    })
    .then(this.props.history.push('/'))
}
    render() { 
        return ( 
          <>
            <div class="bg-white p-3 mt-3 rounded border shadow">
              <div class="d-flex" type="button">
                <div class="p-1">
                  <img
                    src="https://source.unsplash.com/collection/happy-people"
                    alt="avatar"
                    class="rounded-circle me-2"
                    style={{width: "38px", height: "38px", objectFit: "cover"}}
                  />
                </div>
                <input
                  type="text"
                  class="form-control rounded-pill border-0 bg-gray pointer"
                  disabled
                  placeholder="What's on your mind, John?"
                  data-bs-toggle="modal"
                  data-bs-target="#createpost"
                />
              </div>
              <div class="d-flex mt-3">
              <div class="dropdown-item rounded d-flex align-items-center justify-content-center" type="button">
                  <InsertPhoto/>
                  <p class="m-0 text-muted">Photo/Video</p>
                </div>
                <div class="dropdown-item rounded d-flex align-items-center justify-content-center" type="button">
                  <EmojiEmotions/>
                  <p class="m-0 text-muted">Feeling/Activity</p>
                </div>
              </div>
              </div>
              <div
                class="modal fade"
                id="createpost"
                tabindex="-1"
                aria-labelledby="createModalLabel"
                aria-hidden="true"
                data-bs-backdrop="false"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                  <div class="modal-header align-items-center">
                      <h5
                        class="text-dark text-center w-100 m-0"
                        id="exampleModalLabel"
                      >
                        Create Post
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      </div>
                      <div class="modal-body">
                      <div class="my-1 p-1">
                        <div class="d-flex flex-column">
                        <div class="d-flex align-items-center">
                            <div class="p-2">
                              <img
                                src="https://source.unsplash.com/collection/happy-people"
                                alt="from fb"
                                class="rounded-circle"
                                style={{width: "38px", height: "38px", objectFit: "cover"}}/>
                                <div>
                              <p class="m-0 fw-bold">John</p>
                            </div>
                            </div>
                            <div>
                            <textarea id="postdetails" name="postdetails" value={this.state.postdetails} onChange={this.handleChange}
                              cols="30"
                              rows="5"
                              class="form-control border-0"
                            ></textarea>
                          </div>
                          <div class="ms-2">
                      <button type="button" id="addpost" onClick={this.handlepost} data-bs-dismiss="modal" class="btn btn-primary w-100">
                        Post
                      </button>
                    </div>
                            </div>
                        </div>
                        </div></div>
                  </div>
                  </div>
              </div>
              </>
         );
    }
}
 
export default withRouter(AddnewPost);