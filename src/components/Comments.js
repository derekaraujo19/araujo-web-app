import React, {useState} from "react";

function Comments() {
  // create state to house form data for comment - name, comment
  // create values for name & comment that onChange get updated
  // onSubmit, call handleAddComment that packages the data from state into an object that makes a post request AND gets added to state (to update the DOM)

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  console.log(name);
  console.log(comment);

  return (
    <div>
      <h3>COMMENTS</h3>
      <form>
        <input type="text" name="name" placeholder="name"
              onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="comment" placeholder="comment"
              onChange={(e) => setComment(e.target.value)}/>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Comments;