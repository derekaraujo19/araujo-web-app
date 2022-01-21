import React, { useState, useEffect } from "react";

function Home() {
  // useEffect that makes a request to populate the image

  const [homePic, setHomePic] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/home")
      .then((r) => r.json())
      .then((pic) => setHomePic(pic[0]));
  }, []);

  // console.log(homePic.image);



  return (
    <div className="Home">
      <h3 id="homeText">IS A NY BASED MUSIC PRODUCER AND SOFTWARE DEVELOPER. SINCE 2014 HE HAS BEEN RELEASING MUSIC UNDER HIS ARTIST BANNER, STRANGETHINGS. HE IS CURRENTLY ATTENDING THE FLATIRON SCHOOL FOR SOFTWARE ENGINEERING. </h3>
      <img src={homePic.image}
            id="homeImage"
           alt="Derek"
           height='650px'
           width='auto'
      />
    </div>
  );
}

export default Home;