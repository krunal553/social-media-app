import './Stories.css';

import gojo from "../../resources/images/gojo.jpg"

const Stories = () => {

    //TEMPORARY 
    const stories = [
        {
            id: 1,
            name: "Krunal M",
            image: gojo,
        },
        {
            id: 2,
            name: "Meet C",
            image: gojo,
        },
        {
            id: 3,
            name: "Shiv R",
            image: gojo,
        },
        {
            id: 4,
            name: "Helly C",
            image: gojo,
        },
        {
            id: 5,
            name: "Helly C",
            image: gojo,
        },
        {
            id: 6,
            name: "Helly C",
            image: gojo,
        },

        {
            id: 7,
            name: "Helly C",
            image: gojo,
        }, {
            id: 8,
            name: "Helly C",
            image: gojo,
        }, {
            id: 9,
            name: "Helly C",
            image: gojo,
        },
        {
            id: 10,
            name: "Helly C",
            image: gojo,
        }, {
            id: 11,
            name: "Helly C",
            image: gojo,
        },
    ];

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
