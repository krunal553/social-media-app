import './Explore.css';
import React from 'react';

import Post from '../../components/post/Post';
import Search from '../../components/search/Search';
import { posts } from '../../tempData';

import Masonry from 'react-masonry-css';

const Explore = () => {

  const breakpoints = {
    default: 4,
    3000: 6,
    2000:5,
    1200:3,
    500:3,
  }

  return (
    <div className='explore'>
      <Search style={{ position: "sticky", top: "50px", zIndex: "999"}}/>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
      {posts.map(post => (
        <div key={post.id} >
          {/* <Post post={post} /> */}
          <img src={post.image} alt="" />
        </div>
      ))}
      </Masonry>
    </div>

  )
}

export default Explore
