import React from "react";
import Spotify from "react-spotify-embed";

const styles = {
  color: "#F2D2BD"
}

function MusicCard({title, artist, credits, artwork, player, year}) {
  return (
    <div className="musicCard" style={styles}>
      <h2>{title}</h2>
      {/* <p>{year}</p> */}
      <h3>{artist}</h3>
      <p>{credits}</p>
      <Spotify link={player} />
    </div>
  );
}

export default MusicCard;