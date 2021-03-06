import React from 'react';
import image1 from '../../../images/image1.jpeg';
import { Parallax } from 'react-parallax';
import Menu from '../../Menu/Menu';

const Image1 = scrollingLock => {
  return(
    <Parallax
      blur={0}
      bgImage={image1}
      bgImageAlt="izelacover"
      strength={10}
      style={{height: 550, marginLeft: -5}}

    > 
      <Menu scrollingLock={scrollingLock} />
    </Parallax>
  )
}

export default Image1;
