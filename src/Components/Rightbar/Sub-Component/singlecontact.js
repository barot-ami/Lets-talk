import { Avatar } from '@material-ui/core';
import React from 'react'

const SingleContact = ( props ) => {

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length>0){
                return listData.map((item) => {
                    let a = item.email
                    let b = sessionStorage.getItem('userinfo')?sessionStorage.getItem('userinfo').split(',')[1]:''
                    if (a !== b){
                    return(
                        <li
                        class="dropdown-item rounded my-2 px-0"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#singleChat1"
                      >
                        <div class="d-flex align-items-center">
                            <Avatar className="profilepic" src="#"/>
                            <h5>{item.name}</h5>
                        </div>
                        </li>
                    )
                }
                })
            }
        }
    }
    return(
        <>
        {renderData(props)}
        </>
    )
}
 
export default SingleContact;