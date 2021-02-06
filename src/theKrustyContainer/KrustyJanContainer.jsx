/* eslint-disable max-len */
import React from 'react';
import KrabbyCeiling from '../theKrustyKrabPlatterPresentations/KrabbyCeiling'; 
import MrKrabbyPattyMenu from '../theKrustyKrabPlatterPresentations/mrKrabbyPattyMenu';

// this is where all of my state and functions will be kept 
export default class KrustyJanContainer extends React.Component {
  render() {
    return (

      <>
        
        <header>
          <KrabbyCeiling />
        </header>
        
        <div>
          <MrKrabbyPattyMenu />
        </div>
      
      </>

    );
  }
}   
