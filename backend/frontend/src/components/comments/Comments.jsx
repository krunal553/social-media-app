import './Comments.css';
import gojo from '../../resources/images/gojo.jpg'

const Comments = () => {

    //TEMPORARY
    const comments = [
        {
            id:1,
            desc:"this is comment.",
            name: "Krunal Makwana",
            userId: 1,
            profilePic: gojo,
        },
        {
            id:2,
            desc:"this is comment.",
            name: "Krunal Makwana",
            userId: 1,
            profilePic: gojo,
        },
        {
            id:3,
            desc:"this is comment.",
            name: "Krunal Makwana",
            userId: 1,
            profilePic: gojo,
        },
        {
            id:4,
            desc:"this is comment.",
            name: "Krunal Makwana",
            userId: 1,
            profilePic: gojo,
        },
    ]

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
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments
