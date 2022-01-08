import React, { useState, useEffect } from "react";

// useEffect function that makes a get request to the db.json server on load and stores data in state
// send that information down to a MusicCard component via a map
// don't forget to check/rename the api endpoints

function MusicPage() {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((musicItems) => setMusic(musicItems));
  }, []);

  console.log(music);

  // Now, take "music" and map it out and send down to MusicCard component

  return (
    <div>
      <h3>MUSIC PAGE WILL GO HERE</h3>
    </div>
  );
}

export default MusicPage;