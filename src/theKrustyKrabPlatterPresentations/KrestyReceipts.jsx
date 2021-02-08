import React from 'react';
import PropTypes from 'prop-types';

const KrestyReceipts = ({ krustyReceipts }) => {
  return (
    <>
        
      <div>Response</div>
      <div>{krustyReceipts}</div>

    </>
  );
};

KrestyReceipts.PropTypes = {
  krestyReceipts: PropTypes.string.isRequired
};

export default KrestyReceipts;
