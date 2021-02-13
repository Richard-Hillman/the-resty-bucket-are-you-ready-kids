/* eslint-disable max-len */
import React from 'react';
import Fetch from '../../theKrestyService/KrestyService';
import KrabbyCeilingNav from '../../theKrustyKrabPlatterPresentations/navigation/KrabbyCeilingNav'; 
import MrKrabbyPattyMenu from '../../theKrustyKrabPlatterPresentations/requestForm/MrKrabbyPattyMenu';
import KrestyReceipts from '../../theKrustyKrabPlatterPresentations/results/KrestyReceipts';

// this is where all of my state and functions will be kept 
export default class KrustyJanContainer extends React.Component {
  
  state= {
    url: '',
    method: '',
    json: '',
    krestyReceipts: ''   
  }

  // --------------------------------------------------

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetch();
  }

  // --------------------------------------------------

  fetch = () => {
    const { method, url, json } = this.state;
    Fetch(method, url, json)
      .then(res => this.setState({ krestyReceipts: JSON.stringify(res) }));
  }

  // --------------------------------------------------

  render() {
    const { method, url, json, krestyReceipts } = this.state;

    return (

      <>
        
        <header>
          <KrabbyCeilingNav />
        </header>
        
        <div>
          <MrKrabbyPattyMenu 
            method={method}
            url={url}
            json={json}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}       
          />
        </div>
      
        <div>
          <KrestyReceipts krestyReceipts={krestyReceipts} />
        </div>

      </>

    );
  }
}   
