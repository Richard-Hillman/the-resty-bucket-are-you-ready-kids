/* eslint-disable max-len */
const Fetch = (url, method, json) => {
 
  if(method !== 'GET'){
 
    return fetch(url, { method, headers: { 'Content-Type': 'application/json' }, json })
      .then(res => res.json());
  }
  
  return fetch(url)
    .then(res => res.json());
};
  
export default Fetch;
