import './Profile.css'

import pp from '../../resources/images/honey.jpg';
import gojo from '../../resources/images/gojo.jpg';

import Posts from '../../components/posts/Posts';

import { useParams } from 'react-router-dom';
import { users } from '../../tempData';


const Profile = (props) => {

  const { id } = useParams();

  const user = users.filter(obj => obj.userId === parseInt(id));
  // console.log(user);

  return (
    <div className='profile'>
      <div className="images">
        <img src={null} alt="" className='cover' />
        <img src={user[0].profilePic} alt="" className='profilePic' />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          {/* <div className="left">
            Icons
          </div> */}
          <div className="center">
            <span> username{id} : {user[0].name}  </span>
            <div className="info">
              {/* <div className="item">
                item
              </div> */}
              <button>follow</button>
            </div>
          </div>
          
        </div>
      </div>
        <Posts userId={id} isProfile={true}/>
      
    </div>
  )
}

export default Profile
