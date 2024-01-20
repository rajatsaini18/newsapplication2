
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {  
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



export default class App extends Component {
 
apiKey=process.env.REACT_APP_NEWS_API;

  state={
    progress:10,
    country:'in',
    countries:{
      in:"India",
      us:"USA",
      ar:"Argentina",
      ca:"Canada",
      jp:"Japan",
      au:"Australia",
      il:"Israel",
      ua:"Ukraine"
    }
  }

  

 
  handleCountryChange = (countryCode) => {
    this.setState({
     country: countryCode 
    });
    
    
    
  };

   
  setProgress=(progress)=>{
   this.setState({
    progress:progress
   })
  }


  render() {
    return (
      <>
   
     <BrowserRouter>
     <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
        
      />
      <Navbar onCountryChange={this.handleCountryChange} country={this.state.country} countries={this.state.countries} ></Navbar>
      <Routes>
        <Route   exact path='/' element={<News setProgress={this.setProgress}  apiKey={this.apiKey}  country={this.state.country}   key="general" category="general" ></News>}></Route>
        <Route   exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} country={this.state.country}  key="general" category="general" ></News>}></Route>
        <Route   exact  path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} country={this.state.country} key="business" category="business" ></News>}></Route>
        <Route   exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey } country={this.state.country} key="health" category="health" ></News>}></Route>
        <Route   exact  path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} country={this.state.country}  key="science" category="science" ></News>}></Route>
        <Route   exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey}country={this.state.country}   key="sports" category="sports" ></News>}></Route>
        <Route   exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey}country={this.state.country}   key="entertainment" category="entertainment" ></News>}></Route>
        <Route   exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} country={this.state.country}   key="technology" category="technology" ></News>}></Route>
      </Routes>
     
      </BrowserRouter>
      </>
    )
  }
}

