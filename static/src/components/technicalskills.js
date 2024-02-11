import React from 'react';

const TechnicalSkills = ({ skills }) => {
  return (
    <div>
      <th>Technical Skills:</th>
      <ol>
        <li>{skills.skills1}</li>
        <li>{skills.skills2}</li>
        <li>{skills.skills3}</li>
      </ol>
      
    </div>
  );
}

export default TechnicalSkills;