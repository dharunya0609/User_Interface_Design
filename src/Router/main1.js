import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


import i from "./Images/A1/i1.jpg"; //Link Image
import Arunf from "./functionComponent/A1/Arunf.js";//Link Functional component
import Arunc from "./classComponent/A1/Arunc"; //Link Class component

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<><h1 style={{textAlign:"center",color:"darkslateblue"}}>ARUN ICECREAMS </h1>
<div>
<center><img src={i} alt="Error" height={250} width={250} style={{borderRadius:"50%"}}></img></center>
</div>
<Arunf/>
<Arunc/>
<h2 style={{color:"navy",textAlign:"center"}}>ENJOY BEFORE IT MELTS!🍨</h2></>);

reportWebVitals();