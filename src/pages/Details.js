import React from 'react';

function Details(props) {
  console.log(props);
  return (
    <div>
      Details
      <button onClick={() => props.history.push('/')}>VOLTAR</button>
    </div>
  );
}

export default Details;
