import Post from "../Post/Post";
import Share from "../Share/Share";
import "./feed.css";
import { Posts } from "../../dummydata";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} posts={p} />
        ))}
      </div>
    </div>
  );
}
