import './Profile.css'

import pp from '../../resources/images/honey.jpg';
import gojo from '../../resources/images/gojo.jpg';

import Posts from '../../components/posts/Posts';


const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src={gojo} alt="" className='cover' />
        <img src={pp} alt="" className='profilePic' />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            Icons
          </div>
          <div className="center">
            <span>Krunal Makwana</span>
            <div className="info">
              <div className="item">
                item
              </div>
              <button>follow</button>
            </div>
          </div>
          <div className="right">

          </div>
        </div>
      </div>
        <Posts />
      
    </div>
  )
}

export default Profile
