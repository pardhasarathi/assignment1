import React from 'react';

const Declaration = ({ declare, location }) => {
  return (
    <div>
     <h3> Declaration: </h3>{declare}
      <br></br>
    <h3>Place: </h3>{location}
    </div>
  );
}

export default Declaration;