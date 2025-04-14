import React from 'react';
import PropTypes from 'prop-types';

function ListComponent({ 
  items, 
  renderItem, 
  listClassName, 
  itemClassName 
}) {
  return (
    <ul className={listClassName}>
      {items.map((item, index) => (
        <li key={index} className={itemClassName}>
          {renderItem ? renderItem(item) : item.toString()}
        </li>
      ))}
    </ul>
  );
}

ListComponent.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func,
  listClassName: PropTypes.string,
  itemClassName: PropTypes.string
};

ListComponent.defaultProps = {
  renderItem: null,
  listClassName: '',
  itemClassName: ''
};

export default ListComponent;