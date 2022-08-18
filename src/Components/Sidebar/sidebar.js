import { Info,Facebook } from '@material-ui/icons';
import React, { Component } from 'react'

class Sidebar
 extends Component {
    constructor(props) {
        super(props);


    }
    state = {  }
    render() { 
      let name_loggedin = sessionStorage.getItem('userinfo')?sessionStorage.getItem('userinfo').split(',')[0]:'';
        return ( 
            <>
            <div className="d-none d-lg-block" style={{width:"25vw", height:"100%"}}>
            <ul class="list-group ms-3">
            <li class="dropdown-item p-1 rounded">
                <a
                  href="#" class="d-flex align-items-center text-decoration-none text-dark">
                  <div class="p-2">
                    <img src="https://source.unsplash.com/collection/happy-people" alt="avatar" class="rounded-circle me-2" style={{width: "38px", height: "38px", objectFit: "cover"}}/>
                  </div>
                  <div>
                    <p class="m-0">{name_loggedin}</p>
                  </div>
                </a>
              </li>
              <li class="dropdown-item p-1 rounded">
                <a href="#" class="d-flex align-items-center text-decoration-none text-dark">
                  <div class="p-2">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png" alt="from fb" class="rounded-circle" style={{width: "38px", height: "38px", objectFit: "cover"}}/>
                  </div>
                  <div>
                    <p class="m-0">Friends</p>
                  </div>
                </a>
              </li>
              <li class="dropdown-item p-1 rounded">
                <a href="#" class="d-flex align-items-center text-decoration-none text-dark">
                  <div class="p-2">
                    <img src="https://img.icons8.com/fluency/48/000000/about.png" alt="from fb" class="rounded-circle" style={{width: "38px", height: "38px", objectFit: "cover"}}/>
                  </div>
                  <div>
                    <p class="m-0">About</p>
                  </div>
                </a>
              </li>
              <li class="dropdown-item p-1 rounded">
                <a href="#" class="d-flex align-items-center text-decoration-none text-dark">
                  <div class="p-2">
                    <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="from fb" class="rounded-circle" style={{width: "38px", height: "38px", objectFit: "cover"}}/>
                  </div>
                  <div>
                    <p class="m-0">Go to Actual Facebook Site</p>
                  </div>
                </a>
              </li>
</ul>
</div>
</>
         );
    }
    
}
 
export default Sidebar
;