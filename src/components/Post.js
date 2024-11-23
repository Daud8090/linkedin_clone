import "./Post.css";

const Post = ({name, profile_pic, created_at, content, image}) => {

    return <>
    <div className="post">
        <div className="post-header">
            <img src={profile_pic} alt={`${name}'s profile`} className="post-avatar"/>
            <div>
                <h4>{name}</h4>
                <p>{created_at}</p>
            </div>
        </div>
        <div className="post-content">
            <p>{content}</p>
            {image && <img src={image} alt="Post content" />}
        </div>
        <div className="post-actions">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
        </div>
    </div>
    </>;
};

export default Post;
