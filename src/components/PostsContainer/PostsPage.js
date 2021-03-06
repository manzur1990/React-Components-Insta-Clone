//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data.js"
// import data 

const PostsPage = () => {
  const [state, setState] = useState(dummyData);
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {dummyData.map(item =>(
        <Post post={item} key={item.username}/>
      ))}
    </div>
  );
};

export default PostsPage;
