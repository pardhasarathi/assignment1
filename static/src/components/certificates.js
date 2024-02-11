import React from 'react';

const Certificates = ({ props }) => {
  return (
    <div>
      <h4>Certificates:</h4>
      <ul>
        <li>{props.cert1}</li>
        <li>{props.cert2}</li>
        <li>{props.cert3}</li>
      </ul>
    </div>
  );
}

export default Certificates