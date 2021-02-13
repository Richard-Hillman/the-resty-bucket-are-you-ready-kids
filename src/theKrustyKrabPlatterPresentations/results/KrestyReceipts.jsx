import React from 'react';
import PropTypes from 'prop-types';
import styles from './KrestyReceipts.css';
import ReactJson from 'react-json-view';

const KrestyReceipts = ({ display }) => {
  return (
    <div className={styles.KrestyReceipts} data-testId="display">
        
      <div>Response</div>t
      <ReactJson src={display} />
    </div>
  );
};

KrestyReceipts.PropTypes = {
  display: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default KrestyReceipts;
