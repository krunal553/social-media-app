import { useEffect, useState } from 'react';
import './Stories.css';

// import {stories} from '../../tempData';

const Stories = () => {

    const [stories, setStories] = useState([])
    let imgurl = 'http://127.0.0.1:8000/'

    useEffect(() => {

        async function fetchStories () {
          const url = '/api/stories/';
          let data = await fetch(url)
          let parsedData =await data.json();
          setStories(parsedData);
          // console.log(parsedData);
        }
    
        fetchStories();
    
      },[])

    

    return (
            <div className='stories' id='stories-id'>
                {stories.map(story => (
                    <div className="story" key={story.id}>
                        <img src={imgurl+story.image} alt="" />
                        <span>{story.name}</span>
                    </div>
                ))}
            </div>
    )
}

export default Stories
