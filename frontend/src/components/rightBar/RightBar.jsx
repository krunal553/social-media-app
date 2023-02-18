import './RightBar.css'

import gojo from '../../resources/images/gojo.jpg'

const RightBar = () => {
  return (
    <div className="rightBar" id="rightBarr">
      <div className="container">
        <div className="item">
          <span>Suggestions Fron You</span>
          <div className="user">
            <div className="user_info">
              <img src={gojo} alt="" />
              <span>Krunal M</span>
            </div>
            <div className="buttons">
              <button className='follow_btn'>follow</button>
              <button className='dismiss_btn'>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="user_info">
              <img src={gojo} alt="" />
              <span>Krunal M</span>
            </div>
            <div className="buttons">
              <button className='follow_btn'>follow</button>
              <button className='dismiss_btn'>dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="user_info">
              <img src={gojo} alt="" />
              <p>
                <span>Krunal M</span> liked a post
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user_info">
              <img src={gojo} alt="" />
              <p>
                <span>Krunal M</span> liked a post
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user_info">
              <img src={gojo} alt="" />
              <p>
                <span>Krunal M</span> liked a post

              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user_info">
              <img src={gojo} alt="" />
              <p>
                <span>Krunal M</span> liked a post
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user_info">
              <img src={gojo} alt="" />
              <p>
                <span>Krunal M</span> liked a post
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <div className="user">
            <div className="user_info">
              <img src={gojo} alt="" />
              <div className="online" />
              <span>Krunal M</span>
            </div>

          </div>
          <div className="user">
            <div className="user_info">
              <img src={gojo} alt="" />
              <div className="online" />
              <span>Krunal M</span>
            </div>

          </div>
          <div className="user">
            <div className="user_info">
              <img src={gojo} alt="" />
              <div className="online" />
              <span>Krunal M</span>
            </div>

          </div>
          <div className="user">
            <div className="user_info">
              <img src={gojo} alt="" />
              <div className="online" />
              <span>Krunal M</span>
            </div>

          </div>
          <div className="user">
            <div className="user_info">
              <img src={gojo} alt="" />
              <div className="online" />
              <span>Krunal M</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar
