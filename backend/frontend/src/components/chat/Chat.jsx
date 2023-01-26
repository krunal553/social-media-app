import React from 'react'

import "./Chat.css";
import { Link } from 'react-router-dom'

// import moreIcon from '../../resources/svgs/more.svg';
import sendIcon from '../../resources/svgs/send.svg';



const Chat = ({user}) => {
  return (
    <div className="chat">

      <div className="chatBox">

        <div className="user">

          <div className="userInfo">

            <img src={user.profilePic} alt="" />

            <div className="details">
              <Link to={`/profile/1`} style={{ textDecoration: "none" }}>
                <span className='name'>{user.name}</span>
              </Link>
              <span className="date">Active</span>
            </div>

          </div>
          {/* <img src={moreIcon} alt="more" height="25px" width="25px" /> */}
        </div>

        <hr />

        <div className="conversation">
          
        </div>
        <div className="chatSend">
          <form action="#" className="typingArea" autocomplete="off">
            {/* <input type="text" name="outgoing_id" hidden />
            <input type="text" name="incoming_id" hidden /> */}
            <input type="text" className="typeMessage" name="message"
              placeholder="Type Message Here..." />
            <button><img src={sendIcon} alt="" height="35px" width="35px" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Chat


