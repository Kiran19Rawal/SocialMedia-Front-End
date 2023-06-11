import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummydata";

export default function Post({ posts }) {
  const user = Users.filter((u) => u.id === 1);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              alt=""
              className="postProfileImg"
              src={
                Users.filter((u) => u.id === posts?.userId)[0].profilePicture
              }
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === posts?.userId)[0].username}
            </span>
            <span className="postDate">{posts.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{posts?.desc}</span>
          <img className="postImg" src={posts.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter">{posts.like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{posts.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
