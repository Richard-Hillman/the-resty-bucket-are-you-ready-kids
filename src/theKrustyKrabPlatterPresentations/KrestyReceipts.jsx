import React from 'react';
import PropTypes from 'prop-types';
import styles from './KrestyReceipts.css';

const KrestyReceipts = ({ krestyReceipts }) => {
  return (
    <div className={styles.KrestyReceipts}>
        
      <div>Response</div>
      <div>{krestyReceipts}</div>

    </div>
  );
};

KrestyReceipts.PropTypes = {
  krestyReceipts: PropTypes.string.isRequired
};

export default KrestyReceipts;
