import './Post.css';
import { Link , useNavigate} from 'react-router-dom'
import {useState} from 'react'


import moreIcon from '../../resources/svgs/more.svg';
import sendIcon from '../../resources/svgs/send.svg';
import likeIcon from '../../resources/svgs/like.svg';
import likedIcon from '../../resources/images/liked.png';
import commentIcon from '../../resources/svgs/comment.svg';

import Comments from '../comments/Comments';

const Post = ({ post }) => {

    const [commentOpen, setCommentOpen] = useState(false);
    const [postLike, setPostLike] = useState(false);
    const navigate = useNavigate();

    return (
        
        <div className='post'>
            <div className="container">
                <div className="user"> 
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none" }}>
                                <span className='name'>{post.name}</span>
                            </Link>

                            <span className="date">2 hours ago</span>
                        </div>
                    </div>
                    <img src={moreIcon} alt="more" height="25px" width="25px" />

                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.image} alt="" onDoubleClick={()=>setPostLike(true)}/>
                </div>
                <div className="info">
                    <div className="item" onClick={()=>setPostLike(!postLike)} >
                        {postLike ?
                            <img src={likedIcon} alt="liked" height="25px" width="25px"  /> :
                            <img src={likeIcon} alt="like" height="25px" width="25px" />
                        }12 likes
                    </div>
                    <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                        <img src={commentIcon} alt="comment" height="25px" width="25px" />
                        4 Comments
                    </div>
                    <div className="item">
                        <img src={sendIcon} alt="shares" height="25px" width="25px" />
                        Share
                    </div>
                </div>
                {commentOpen && <Comments />}
            </div>
        </div>
    )
}

export default Post
