import React, {useState, useEffect} from "react";
import Comments from "./Comments";

// send addNewComment down to Comments component
// create "comments" state - DONE
// useEffect to get the comments from the server and "setComments" - DONE
// addNewComment takes existing comments from server and adds new comments coming off of submit
// map out comments - DONE

function CommentPage() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/comments")
      .then((r) => r.json())
      .then((commentItems) => setComments(commentItems));
  }, []);

  console.log(comments);

  function addNewComment(newComment) {
    setComments([...comments, newComment]);
  }

  return (
    <div>
      <h3>SHARE YOUR THOUGHTS</h3>
      <Comments addNewComment={addNewComment}/>
      <ul className="comments">
        {comments.map((comment) => (
          <div key={comment.id}>
            <h4>{comment.name} says..</h4>
            <p>{comment.comment}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}


export default CommentPage;

