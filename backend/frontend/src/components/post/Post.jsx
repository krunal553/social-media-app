import './Post.css';
import { Link } from 'react-router-dom'
import {useState} from 'react'

import sendIcon from '../../resources/svgs/send.svg';
import likeIcon from '../../resources/svgs/like.svg';
import commentIcon from '../../resources/svgs/comment.svg';

import Comments from '../comments/Comments';

const Post = ({ post }) => {

    const [commentOpen, setCommentOpen] = useState(false)

    //Temporary
    const liked = false;

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
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.image} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        {liked ?
                            <img src={likeIcon} alt="liked" /> :
                            <img src={null} alt="like" />
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
