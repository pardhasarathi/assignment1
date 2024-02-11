import React from 'react';

const Projects = ({ props }) => {
  return (
    <div>
      <th>Projects:</th>
      <table>
        <tbody>
          <tr>
            <td>{props.project1}</td>
          </tr>
          <tr>
            <td>{props.project2}</td>
          </tr>
          <tr>
            <td>{props.project3}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Projects;