import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

/*Assignment 1
import i from "./Images/A1/i1.jpg"; //Link Image
import Arunf from "./functionComponent/A1/Arunf.js";//Link Functional component
import Arunc from "./classComponent/A1/Arunc"; //Link Class component*/

//Assignment 2
import Header from './functionComponent/A2/Header';
import Main from './classComponent/A2/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<><Header/><Main/></>);


/* ASSIGNMENT 1 <h1 style={{textAlign:"center",color:"darkslateblue"}}>ARUN ICECREAMS </h1>
<div>
<center><img src={i} alt="Error" height={250} width={250} style={{borderRadius:"50%"}}></img></center>
</div>
<Arunf/>
<Arunc/>
<h2 style={{color:"navy",textAlign:"center"}}>ENJOY BEFORE IT MELTS!🍨</h2>*/


/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
