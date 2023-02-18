import './Posts.css';

import Post from '../post/Post';
import { useEffect, useState } from 'react';

// import {posts} from '../../tempData';

const Posts = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    async function fetchPosts () {
      const url = 'http://127.0.0.1:8000/api/posts/';
      let data = await fetch(url)
      let parsedData =await data.json();
      setPosts(parsedData);
      // console.log(parsedData);
    }

    fetchPosts();

  },[])

  
  return (
    <>
    <div className='posts'>
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
    </div>
    <div className="temp"></div>
    </>
  )
};

export default Posts
