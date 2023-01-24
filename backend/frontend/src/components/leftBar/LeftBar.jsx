import './LeftBar.css'

import gojo from "../../resources/images/gojo.jpg";
import friends from "../../resources/images/friends.png"
// import user from "../../resources/images/user.png"
import people from "../../resources/images/people.png"
// import planner from "../../resources/images/planner.png"
// import donation from "../../resources/images/donation.png"
import videoplayer from "../../resources/images/video-player.png"


const LeftBar = () => {
  return (
    <div className="leftBar" id='leftBarr'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={gojo} alt="" />
            <span>Krunal M</span>
          </div>

          <div className="item">
            <img src={friends} alt="" />
            <span>Friends</span>
          </div><div className="item">
            <img src={people} alt="" />
            <span>Groups</span>
          </div><div className="item">
            <img src={null} alt="" />
            <span>Marketplace</span>
          </div><div className="item">
            <img src={videoplayer} alt="" />
            <span>Watch</span>
          </div><div className="item">
            <img src={null} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={null} alt="" />
            <span>Friends</span>
          </div><div className="item">
            <img src={null} alt="" />
            <span>Groups</span>
          </div><div className="item">
            <img src={null} alt="" />
            <span>Marketplace</span>
          </div><div className="item">
            <img src={null} alt="" />
            <span>Watch</span>
          </div><div className="item">
            <img src={null} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={null} alt="" />
            <span>Friends</span>
          </div><div className="item">
            <img src={null} alt="" />
            <span>Groups</span>
          </div><div className="item">
            <img src={null} alt="" />
            <span>Marketplace</span>
          </div><div className="item">
            <img src={null} alt="" />
            <span>Watch</span>
            </div><div className="item">
            <img src={null} alt="" />
            <span>Memories</span></div><div className="item">
            <img src={null} alt="" />
            <span>Memories</span></div><div className="item">
            <img src={null} alt="" />
            <span>Memories</span></div><div className="item">
            <img src={null} alt="" />
            <span>Memories</span></div><div className="item">
            <img src={null} alt="" />
            <span>Memories</span></div><div className="item">
            <img src={null} alt="" />
            <span>Memories</span></div><div className="item">
            <img src={null} alt="" />
            <span>Memories</span></div><div className="item">
            <img src={null} alt="" />
            <span>Memories</span></div><div className="item">
            <img src={null} alt="" />
            <span>Memories</span></div><div className="item">
            <img src={null} alt="" />
            <span>Memories</span>
          </div>
        </div>


      </div>
    </div>
  )
}

export default LeftBar
