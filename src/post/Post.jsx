import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://images.hdqwalls.com/download/motivational-message-2560x1440.jpg" alt="" />
    
    <div className="postInfo">
        <div className="postCategories">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
    <span className="postTitle">Lorem ipsum dolor sit amet </span>
    <hr />
    <span className="postDate">1 hour ago</span>
    <p className="postDesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
    the industry's standard dummy text ever since the 1500s. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
    </p>
     </div>
    </div>

  )
}
