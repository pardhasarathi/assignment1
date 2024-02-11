import React from 'react';

const Education = ({ qualifications }) => {
  return (
    <div>
      <div>
        Qualifications :
        <table>
          <tbody>
            <tr>
              <td>Schooling :</td>
              <td>{qualifications.qualifications1}</td>
            </tr>
            <tr>
              <td>Secondary school :</td>
              <td>{qualifications.qualifications2}</td>
            </tr>
            <tr>
              <td>Under Graduation :</td>
              <td>{qualifications.qualifications3}</td>
            </tr>
            <tr>
              <td>Post Graduation :</td>
              <td>{qualifications.qualifications4}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
    </div>
  );
};

export default Education;