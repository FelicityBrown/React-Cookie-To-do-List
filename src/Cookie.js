import React from 'react';
import './Cookie.css';

function Cookie(props) {
    let images = [
      '/cookiedrawing0.svg',
      '/cookiedrawing1.svg',
      '/cookiedrawing2.svg',
      '/cookiedrawing3.svg',
      '/cookiedrawing4.svg',
      '/cookiedrawing5.svg',
      '/cookiedrawing6.svg',
      '/cookiedrawing7.svg',
    ]
    return <div className="cookie">
      {/* <img className="cookie-overlay" src={images[props.step]} alt="Bites" /> */}
      { images.map((image, index) => {
        if (index < props.step) {
          return
        }
        return <img className="cookie-overlay" src={image} alt="Bites" style={{zIndex: 8-index}} />
      }) }
    </div>;
  }

  export default Cookie;