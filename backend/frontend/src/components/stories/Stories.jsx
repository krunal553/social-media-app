import './Stories.css';

import {stories} from '../../tempData';

const Stories = () => {
    return (
            <div className='stories' id='stories-id'>
                {stories.map(story => (
                    <div className="story" key={story.id}>
                        <img src={story.image} alt="" />
                        <span>{story.name}</span>
                    </div>
                ))}
            </div>
    )
}

export default Stories
