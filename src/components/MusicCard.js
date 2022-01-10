import React from "react";
import Spotify from "react-spotify-embed";

function MusicCard({title, artist, credits, artwork, player, year}) {
  return (
    <div>
      <h3>{title}</h3>
      {/* <p>{year}</p> */}
      <h4>{artist}</h4>
      <h4>{credits}</h4>
      <Spotify link={player} />
    </div>
  );
}

export default MusicCard;