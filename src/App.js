import './App.css';
import React from 'react';
import './BootStrap/bootstrap.min.css';
import image from './images/cloud.jpg';
import image2 from './images/sunny.jpg';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
function App() {
    const [apistate,setapistate]=React.useState({
      celcius:Math.round(275.54-273.15),
      name:'Russia',
      Humidity:81,
      speed:3.9,
      temp:"Clouds"
    })
  const[name,setName]=React.useState('');
  const clickhandle= ()=>{
  if(name!=="")
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=0025ebc9ee912ac7f5e2b98d3f4f2d4c`).then(res=>res.json()).then(data=>{
  setapistate({...apistate,celcius:Math.round(data.main.temp-273.15),name:data.name,Humidity:data.main.humidity,speed:data.wind.speed,temp:data.weather[0].main})
  })
    .catch(function(){
         console.log("Couldn't get the data")
     })
     if(apistate.temp==="Clouds")
     {
        document.body.style.backgroundImage=`url(${image})`;
     }
     if(apistate.temp==="Clear")
     {
      document.body.style.backgroundImage=`url(${image2})`;
     }
 }
  return(
    <div className="container">
    <div className="container-fluid">
    <h1 style={{position:'relative',left:'26vw',fontFamily:'Cantarell',color:'white'}} className="col-lg-12 col-md-12 col-sm-12 class2">Weather App</h1>
    <div className="row">
    <div className="class1 col-lg-6 col-md-12 col-sm-12 col-xs-12">
      <div style={{display:'flex'}} className="row">
         <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12"><input type="text" className="class3" placeholder="Enter city name" onChange={e=>setName(e.target.value)}></input></div>
         <div className="col-lg-4 col-md-4 col-sm-12"><input type="button" className="class4" value="Search" onClick={clickhandle}></input></div>
         </div>
      </div>
      <div className="row class6"><h3>{apistate.name}</h3></div>
      <div className="row class5" style={{display:'flex'}}>
             <div className="col-lg-6 col-md-6 col-sm-6"><h4 style={{color:'white'}}>Temperature:{Math.round(apistate.celcius)}<sup>o</sup>C</h4></div>
             <div className="col-lg-6 col-md-6 col-sm-6"><h4 style={{color:'white',position:'relative',left:'60px'}}>Weather:{apistate.temp}</h4></div>
      </div>
      <div className="row class5" style={{display:'flex'}}>
             <div className="col-lg-6 col-md-6 col-sm-6"><h4 style={{color:'white'}}>Humidity:{apistate.Humidity}g m<sup>-3</sup></h4></div>
             <div className="col-lg-6 col-md-6 col-sm-6"><h4 style={{color:'white',position:'relative',left:'60px'}}>WindSpeed:{apistate.speed} Km/hr</h4></div>
      </div>
    </div>
    </div>
   </div> 
   </div>
  )
}

export default App;
