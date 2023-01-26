import './Posts.css';

import Post from '../post/Post';

import {posts} from '../../tempData';

const Posts = () => {

  //TEMPORARY
  
  return (
    <div className='posts'>
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
};

export default Posts
