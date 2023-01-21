import './Posts.css';

import pp from '../../resources/images/honey.jpg';
import gojo from '../../resources/images/gojo.jpg';
import Post from '../post/Post';

const Posts = () => {

  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Krunal Makwana",
      userId: 1,
      profilePic: gojo,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
      image: pp,
    },
    {
      id: 2,
      name: "Krunal Makwana",
      userId: 1,
      profilePic: gojo,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
      image: pp,
    },
    {
      id: 3,
      name: "Krunal Makwana",
      userId: 1,
      profilePic: gojo,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
      image: pp,
    },
    {
      id: 4,
      name: "Krunal Makwana",
      userId: 1,
      profilePic: gojo,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
      image: pp,
    },
  ];

  return (
    <div className='posts'>
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
};

export default Posts
