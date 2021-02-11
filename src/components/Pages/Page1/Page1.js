import React from 'react';
import './Page1.css';
import BandcampPlayer from 'react-bandcamp';



const Page1 = () => {
  return(
    <div 
      id="page1">
      <br />
      <br />
      <br />
      <br />
      <BandcampPlayer 
      album="135567762"
      size="small"
      width="500px"
      height="43px"
      tracklist="true" 
    />
    </div>
    
  )
  
}

export default Page1;
