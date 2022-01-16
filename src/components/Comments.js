import React, {useState} from "react";

function Comments({addNewComment}) {
  // create state to house form data for comment - name, comment - DONE
  // create values for name & comment that onChange get updated -DONE
  // onSubmit, call handleSubmit that packages the data from state into an object that makes a post request
    // send packaged newComment data up via addNewComment to commentPage to be added to the DOM

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [occupation, setOccupation] = useState("")

  console.log(name);
  console.log(comment);

  function handleSubmit(e) {
    e.preventDefault()
    let newCommentData = {
      "name": name,
      "comment": comment,
      "occupation": occupation
    };
    fetch('http://localhost:3001/comments', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCommentData)
    })
    .then((r) => r.json())
    .then((newComment) => addNewComment(newComment));
  }

  return (
    <div id="comment-form">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name"
              onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="occupation" placeholder="i am a"
              onChange={(e) => setOccupation(e.target.value)}/>
        <input type="text" name="comment" placeholder="comment"
              onChange={(e) => setComment(e.target.value)}/>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Comments;