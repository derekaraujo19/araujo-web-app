import React, {useEffect, useState} from "react";

function Resume() {
  const [resPic, setResPic] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/resume")
      .then((r) => r.json())
      .then((pic) => setResPic(pic[0]));
  }, []);

  return (
    <div className="resSection">
      <ul id="resume">
        <h2>education</h2>
          <h3>Flatiron School for Software Engineering</h3>
          <h3>The Clive Davis School for Recorded Music at NYU</h3>
        <h2>Experience</h2>
          <h4>Red Marble Media, NYC - Associate Producer, Casting Director</h4>
          <h4>WHB Performing Arts Center, Westhampton Beach - Audio Tech, House Mgr</h4>
          <h4>'Early In The Morning' EP, Brooklyn - Producer</h4>
          <h4>Optomen Productions, NYC - Assistant</h4>
          <h4>Music Supervisor Joe Rudge, Brooklyn - Assistant</h4>
      </ul>
      <img
        src={resPic.image} alt="Derek Shoot"
        id="resImage"
        height="1000px"
        width="auto"
      />
    </div>
  );
}

export default Resume;