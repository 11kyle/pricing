import React from 'react';

const ListItem = (props) => {
  const list = props.list.map((item, index) => {
    return (
      <li>{item}</li>
    );
  });
  return (
    <ul className="list-unstyled mt-3 mb-4">{list}</ul>
  );
}

export default ListItem;
