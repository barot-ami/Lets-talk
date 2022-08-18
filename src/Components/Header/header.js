import React, { Component } from 'react'
import { VideoLibrary, People, MessageRounded, MenuOpenRounded, Search, Home } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import {withRouter} from 'react-router-dom'


class Header
 extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }

    handleLogout = () => {
        sessionStorage.removeItem('userinfo');
        sessionStorage.setItem('loginStatus',false);
        sessionStorage.removeItem('ltk');
        this.props.history.push('/')
    }
    render() { 
        return ( 
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className='d-flex'>
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" width="70" height="40"/>
                <div class="input-group ms-2" type="button">
                    <span class="input-group-prepend d-lg-none" id="searchresults" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                <div class="input-group-text bg-gray border-0 rounded-circle" style={{minHeight:"40px"}}>
                                <Search/>
                                </div>
                    </span>
                    <span class="input-group-prepend d-none d-lg-block" id="searchresults" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                <div class="input-group-text bg-gray border-0 rounded-pill" style={{minHeight: "40px", minWidth: "230px"}}>
                                <Search/>
                                <p class="m-0 fs-7 text-muted">Search Lets Talk</p>
                                </div>
                    </span>
                    <ul class="dropdown-menu" aria-labelledby="searchresults">
                    </ul>
                </div>
                </div>
                <div className="d-flex gap-2">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                        <button type="button" class="btn px-4">
                        <Home/>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <button type="button" class="btn px-4">
                        <VideoLibrary/>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <button type="button" class="btn px-4">
                        <People/>
                        </button>
                    </div>
                </div>
                <div className="d-flex gap-2 align-items-center">
                    <IconButton style={{backgroundColor: "#E4E6EB"}}>
                        <MessageRounded/>
                    </IconButton>
                    <IconButton style={{backgroundColor: "#E4E6EB"}}>
                        <MenuOpenRounded/>
                    </IconButton>
                    <div
              class="
                rounded-circle
                p-1
                bg-gray
                d-flex
                align-items-center
                justify-content-center
                mx-2
              "
              type="button"
              id="secondMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              <img src="https://source.unsplash.com/collection/happy-people" class="rounded-circle me-2" alt="avatar"
                    style={{width:"45px", height:"45px", objectFit:"cover"}}/>
            </div>
            <ul
              class="dropdown-menu border-0 shadow p-3"
              aria-labelledby="secondMenu"
              style={{width: "23em", right: "0", left: "unset"}}
            >
                <button class="m-0" onClick={this.handleLogout}>Logout</button>
              <hr />
            </ul>
                </div>
            </div>
            </nav>
            </>
         );
    }
}
 
export default withRouter(Header)
;