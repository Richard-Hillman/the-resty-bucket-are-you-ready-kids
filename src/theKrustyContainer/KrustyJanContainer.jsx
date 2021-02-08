/* eslint-disable max-len */
import React from 'react';
import KrabbyCeilingNav from '../theKrustyKrabPlatterPresentations/KrabbyCeilingNav'; 
import MrKrabbyPattyMenu from '../theKrustyKrabPlatterPresentations/MrKrabbyPattyMenu';
import Fetch from '../services/Fetch';

// this is where all of my state and functions will be kept 
export default class KrustyJanContainer extends React.Component {
  
  state= {
    url: '',
    method: '',
    json: '',
    results: ''   
  }

handleSubmit = (e) => {
  e.preventDefault();
  this.fetch();
}

handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value });
}

fetch = () => {
  const { method, url, json } = this.state;
  Fetch(method, url, json)
    .then(res => this.setSTate({ results: JSON.stringify(res) }));

}

render() {
  const { method, url, json, results } = this.state;

  return (

    <>
        
      <header>
        <KrabbyCeilingNav />
      </header>
        
      <div>
        <MrKrabbyPattyMenu />
      </div>
      
    </>

  );
}
}   
