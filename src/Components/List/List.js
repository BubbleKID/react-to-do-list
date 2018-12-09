import React from 'react';

function List(props) {
  const { children } = props;
  return (
    <div>
      <input type="checkbox" />
      <span>{ children }</span>
    </div>
  );
}

export default List;
