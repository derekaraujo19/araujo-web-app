import React from "react";
import Spotify from "react-spotify-embed";

function MusicCard({title, artist, credits, artwork, player, year}) {
  return (
    <div className="MusicCards">
      <h2>{title}</h2>
      {/* <p>{year}</p> */}
      <p>{artist}</p>
      <p>{credits}</p>
      <Spotify link={player} />
    </div>
  );
}

export default MusicCard;