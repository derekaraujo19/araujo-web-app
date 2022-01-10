import React, { useState, useEffect } from "react";
import MusicCard from "./MusicCard";

// useEffect function that makes a get request to the db.json server on load and stores data in state
// send that information down to a MusicCard component via a map
// don't forget to check/rename the api endpoints

function MusicPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((musicItems) => setProjects(musicItems));
  }, []);

  console.log(projects);

  // Now, take "music" and map it out and send down to MusicCard component

  return (
    <div>
      <ul className="cards">
        {projects.map((project) => (
          <MusicCard
          key={project.id}
          title={project.name}
          />
        ))}
      </ul>
    </div>
  );
}

export default MusicPage;