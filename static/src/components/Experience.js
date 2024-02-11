import React from 'react';

const Experience = ({ talent }) => {
  return (
    <div>
      <th>Experience:</th>
      <table>
        <tr>
            <td>
                {talent}
            </td>
        </tr>
      </table>
      
    </div>
  );
}

export default Experience;