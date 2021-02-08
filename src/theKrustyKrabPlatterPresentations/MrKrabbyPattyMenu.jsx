/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const MrKrabbyPattyMenu = ({ onChange, onSubmit, method, url, json }) => {
  return (
  // eslint-disable-next-line max-len
    <div style={{ backgroundColor: 'grey', width: '90vw', height: '90vw', color: 'black' }}>
   
      {/* ------------------------ */}
   
      <form onSubmit={onSubmit}>

        {/* this is where you type in the url for the api.*/}
        <label className="url">
          <input type="text" value={url} name="urlBar" onChange={onChange} placeholder="Type Api Url Here" />
        </label>

        {/* ---------------------------- */}

        {/* This is where the radio buttons will be  */}
        <label className="radio">

          <label htmlFor="GET">
            GET
            {/* GET RADIO BUTTON */}
            <input type="radio" value="GET" name="ApiMethod" id="get" checked={method === 'GET'} onChange={onChange}/>
          
          </label>

          {/* ------------------------------------------ */}

          <label htmlFor="POST">
            POST  
            {/* POST RADIO BUTTON */}
            <input type="radio" value="POST" name="ApiMethod" id="post" checked={method === 'POST'} onChange={onChange}/>

          </label>

          {/* ------------------------------------------ */}

          <label htmlFor="POST">
            POST
            {/* PUT RADIO BUTTON */}
            <input type="radio" value="PUT" name="ApiMethod" id="put" checked={method === 'PUT'} onChange={onChange}/>
          </label>
          {/* ------------------------------------------ */}

          <label htmlFor="PATCH">
            PATCH
            {/* PATCH RADIO BUTTON */}
            <input type="radio" value="PATCH" name="ApiMethod" id="patch" checked={method === 'PATCH'} onChange={onChange}/>
          </label>

          {/* ------------------------------------------ */}

          <label htmlFor="DELETE">
            DELETE
            {/* DELETE RADIO BUTTON  */}
            <input type="radio" value="DELETE" name="ApiMethod" id="delete" checked={method === 'DELETE'} onChange={onChange}/>
          </label>

          {/* ------------------------------------------ */}

        </label>

        {/* ---------------------------- */}

        {/* this is where you type your json
Will also relocate the button here.  */}
        <label>
          <textarea value={json} name="json" onChange={onChange}></textarea>
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
  onSubmit:PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired,
};

export default MrKrabbyPattyMenu;
