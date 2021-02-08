/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const MrKrabbyPattyMenu = ({ handleChange, handleSubmit, method, url, json }) => {
  return (
  // eslint-disable-next-line max-len
    <div style={{ backgroundColor: 'grey', width: '90vw', height: '90vw', color: 'black' }}>
   
      {/* ------------------------ */}
   
      <form handleSubmit={handleSubmit}>

        {/* this is where you type in the url for the api.*/}
        <label className="url">
          <input type="text" value={url} name="url" onChange={handleChange} placeholder="Type Api Url Here" />
        </label>

        {/* ---------------------------- */}

        {/* This is where the radio buttons will be  */}
        <section className="formRadio">

          <label htmlFor="GET">
            GET
          </label>
          
          <input type="radio" value="GET" name="method" id="get" checked={method === 'GET'} onChange={handleChange}/>
          {/* GET RADIO BUTTON */}
          
          {/* ------------------------------------------ */}

          <label htmlFor="POST">
            POST  
            {/* POST RADIO BUTTON */}
          </label>
          
          <input type="radio" value="POST" name="method" id="post" checked={method === 'POST'} onChange={handleChange}/>

          {/* ------------------------------------------ */}
           
          <label htmlFor="POST">
            POST
            {/* PUT RADIO BUTTON */}
          </label>

          <input type="radio" value="PUT" name="method" id="put" checked={method === 'PUT'} onChange={handleChange}/>
          
          {/* ------------------------------------------ */}
          
          <label htmlFor="PATCH">
            PATCH
            {/* PATCH RADIO BUTTON */}
          </label>

          <input type="radio" value="PATCH" name="method" id="patch" checked={method === 'PATCH'} onChange={handleChange}/>

          {/* ------------------------------------------ */}
          
          <label htmlFor="DELETE">
            DELETE
            {/* DELETE RADIO BUTTON  */}
          </label>

          <input type="radio" value="DELETE" name="method" id="delete" checked={method === 'DELETE'} onChange={handleChange}/>

          {/* ------------------------------------------ */}

        </section>

        {/* ---------------------------- */}

        {/* this is where you type your json
Will also relocate the button here.  */}
        <label>
          <textarea value={json} name="json" onChange={handleChange}></textarea>
          <button>SEND</button>
        </label>
    
      </form>

      {/* ------------------------ */}

    </div>
  );
};

MrKrabbyPattyMenu.propTypes = {
  url: PropTypes.string.isRequired,
  method:PropTypes.string.isRequired,
  json:PropTypes.string.isRequired,
  handleSubmit:PropTypes.func.isRequired,
  handleChange:PropTypes.func.isRequired,
};

export default MrKrabbyPattyMenu;
