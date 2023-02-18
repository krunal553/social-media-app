import './Comments.css';
import gojo from '../../resources/images/gojo.jpg'
import { useEffect, useState } from 'react';


const Comments = ({post}) => {

    //TEMPORARY
    // const comments = [
    //     {
    //         id:1,
    //         desc:"this is comment.",
    //         name: "Krunal Makwana",
    //         userId: 1,
    //         profilePic: gojo,
    //     },
    //     {
    //         id:2,
    //         desc:"this is comment.",
    //         name: "Krunal Makwana",
    //         userId: 1,
    //         profilePic: gojo,
    //     },
    //     {
    //         id:3,
    //         desc:"this is comment.",
    //         name: "Krunal Makwana",
    //         userId: 1,
    //         profilePic: gojo,
    //     },
    //     {
    //         id:4,
    //         desc:"this is comment.",
    //         name: "Krunal Makwana",
    //         userId: 1,
    //         profilePic: gojo,
    //     },
    // ]

    const [comments, setComments] = useState([]);

    useEffect(() => {

        async function fetchPosts() {
            const url = `http://127.0.0.1:8000/api/postcomments/${post._id}`;
            let data = await fetch(url)
            let parsedData = await data.json();
            setComments(parsedData);
            // console.log(parsedData);
        }

        fetchPosts();

    }, [])


    return (



        <div className='comments'>
            <div className="write">
                {/* Temp */}
                <img src={gojo} alt="" />
                <input type="text" name="" id="" placeholder='Write a comment...' />
                <button>Send</button>
            </div>

            {comments.map((comment) => (
                <div className="comment">
                    <img src={gojo} alt="" />
                    <div className="info">
                        <span>{comment.user}</span>
                        <p>{comment.comment_text}</p>
                    </div>
                    <span className='date'>{comment.commented_on}</span>
                </div>
            ))}
        </div>
    )
}

export default Comments
