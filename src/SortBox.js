import React, { Component } from 'react';

class SortBox extends Component {
  render() {
    const { items, itemChange } = this.props;

    const options = items.map((sortItem) =>
      <option value={sortItem.key}>{sortItem.label}</option>
    );

    return (
      <>
          Sort product by :
          <select onChange={(val) => {itemChange(val)}}>
            {options}
          </select>
      </>
    );
  }
}

export default SortBox;
