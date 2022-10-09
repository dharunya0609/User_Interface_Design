import React from 'react';
import s from'./Arunc.module.css'

class Arunc extends React.Component
{
    render()
    {
        return(
        <>
          <h2 className={s.tag1}>Products Available</h2>
          <ul>
            <li>Classic Vannila</li>
            <li>Cotton Candy</li>
            <li>Icones and Tubs</li>
          </ul>
          <strong><hr></hr></strong>
          <h2 style={{color:"navy"}}>To learn more about our services and offerings,</h2>
          <center>
          <table border={1}>
            <tr>
                <td>Telephone Number</td>
                <td> 044-24501622</td>
            </tr>
            <tr>
                <td>Fax Number</td>
                <td>044-24501422</td>
            </tr>
            <tr>
                <td>Mail ID</td>
                <td><a href="mailto:info@hap.in">info@hap.in</a></td>
            </tr>
            <tr>
                <td>Call Toll Free</td>
                <td>1800-425-3355</td>
            </tr>
          </table></center>
        </>);
    }
}
export default Arunc;