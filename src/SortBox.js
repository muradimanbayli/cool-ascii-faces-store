import React, { Component } from 'react';

class SortBox extends Component {
  render() {

    const options = this.props.items.map((sortItem) =>
      <option value={sortItem.key}>{sortItem.label}</option>
    );

    return (
      <div>
          Sort product by :
          <select onChange={(val) => {this.props.itemChange(val)}}>
            {options}
          </select>
      </div>
    );
  }
}

export default SortBox;
