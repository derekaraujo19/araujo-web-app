import React, {useState} from "react";

function Comments() {
  // create state to house form data for comment - name, comment - DONE
  // create values for name & comment that onChange get updated -DONE
  // onSubmit, call handleSubmit that packages the data from state into an object that makes a post request AND gets added to state.
    // Then, send packaged newComment data up via addNewComment to commentPage to be added to the DOM

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  console.log(name);
  console.log(comment);

  // handle submit
  // e.prevent.default

  return (
    <div>
      <h3>WHAT FRIENDS ARE SAYING</h3>
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