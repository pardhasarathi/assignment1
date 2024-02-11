import React from 'react';

const Header = ({ name, email, mobilenumber }) => {
  return (
    <div>
     
      
      <div>
        
        <table>
          <tbody>
            <th>PERSONAL DETAILS:</th>
            <tr>
              <td>NAME: </td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>EMAIL ADDRESS:</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>MOBILE NUMBER :</td>
              <td>{mobilenumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
    </div>
  );
}

export default Header;