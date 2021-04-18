import React from 'react';
import './Menu.css';

const Menu = props => {
  const { scrollingLock } = props;
  return(
    <div style={{ height: '100vh' }}>
      <div 
        className="header" 
        style={{position: scrollingLock ? "fixed" : "relative"}}>

        <div className="menu">
          {/* <div className="title">I</div> */}
        </div>

        <div className="menu">
          <a href="#">Home</a>
          <a href="#page1">Music</a>
          <a href="#page2">About</a>
        </div>

      </div>
    </div>
  )
}

export default Menu;
