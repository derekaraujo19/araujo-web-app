import React, { useState, useEffect } from "react";
import MusicCard from "./MusicCard";

// useEffect function that makes a get request to the db.json server on load and stores data in state
// send that information down to a MusicCard component via a map
// don't forget to check/rename the api endpoints

function MusicPage() {
  const [projects, setProjects] = useState([]);
  const [musicPic, setMusicPic] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then((r) => r.json())
      .then((musicItems) => setProjects(musicItems));

    fetch("http://localhost:3001/music")
      .then((r) => r.json())
      .then((pic) => setMusicPic(pic[0]));
  }, []);

  // console.log(musicPic);


  return (
    <div className="Music">
      <img
        src={musicPic.image}
        alt="Studio"
        width='720px'
        id="musicPic"
      />
      <div id="music-page">
        {projects.map((project) => (
          <MusicCard
          key={project.id}
          title={project.title}
          artist={project.artist}
          credits={project.credits}
          artwork={project.artwork}
          player={project.player}
          year={project.year}
          />
        ))}
      </div>
    </div>
  );
}

export default MusicPage;