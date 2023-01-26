import './Chats.css';

import Chat from "../chat/Chat";

import {useState} from 'react'

import React from 'react'
import { users } from '../../tempData';

// import gojo from "../../resources/images/gojo.jpg";

const Chats = () => {

    const [user, setUser] = useState();

    return (
        <div className='chats'>
            <div className="chatList">
                {users.map(user => (
                    <div className="user" key={user.userId}>
                        <img src={user.profilePic} alt="" />
                        <span onClick={()=>setUser(user)}>{user.name}</span>
                    </div>
                ))}
            </div>
            <div style={{flex: '60%'}}>
                { user && <Chat user={user} />}
            </div>
        </div>
    )
}

export default Chats
