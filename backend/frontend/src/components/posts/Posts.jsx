import './Posts.css';

import Post from '../post/Post';
import { useState } from 'react';
import { useEffect } from 'react';

// import {posts} from '../../tempData';

const Posts = ( props ) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    async function fetchPosts () {
      const url = '/api/posts/';
      let data = await fetch(url)
      let parsedData =await data.json();
      setPosts(parsedData);
      // console.log(parsedData);
    }

    fetchPosts();

  },[])

  return (
    <div className='posts'>
      {props.isProfile ? posts.filter(obj => obj.userId === props.userId).map(post=>(
        <Post post={post} key={post._id}/>
      )) : 
      posts.map(post=>(
        <Post post={post} key={post._id}/>
      ))}
    </div>
  )
};

export default Posts
