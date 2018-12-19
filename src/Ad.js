import React, { Component } from 'react';
import './Ad.css'

class Ad extends Component {

  render() {
    const randomAdUrl= "http://localhost:3000/ads/?r="+ Math.floor(Math.random()*1000);
    const divBannerImageStyle = {
      backgroundImage: 'url(' + randomAdUrl + ')',
    }

    return (
      <div style={divBannerImageStyle} className="ad-panel">
          But first, a word from our sponsors:
      </div>
    );
  }
}

export default Ad;
