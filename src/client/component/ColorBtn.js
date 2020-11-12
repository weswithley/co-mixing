// library
import React, { useRef } from 'react';
import { gsap, TweenMax, Back} from "gsap/all";
gsap.registerPlugin(TweenMax, Back);

// scss
import '../scss/color-btn.scss';

export const ColorBtn = (props) => {
  const { colorSettings, colorSwitcher, mixerMode } = props;
  const currentColorBtn = useRef(null);
  const tmpRGB = 'rgb(' + colorSettings.rgb.r + ',' + colorSettings.rgb.g + ',' + colorSettings.rgb.b + ')';

  const colorTransform = (type) => {
    const tmpTarget = currentColorBtn.current;
    if(type === 'enter'){
      TweenMax.to(tmpTarget, 0.2, { scale: 3, easeInOut: Back.easeInOut});
    }else if(type === 'leave'){
      TweenMax.to(tmpTarget, 0.2, { scale: 1, easeInOut: Back.easeInOut });
    }else{
      console.log('wrong params type');
    }
  }

  const colorUp = () => {
    console.log('colorUp');
    const tmpTarget = currentColorBtn.current;
    tmpTarget.removeEventListener('mousemove', () => {});
  }

  const colorDown = () => {
    console.log('colorDown');
    const tmpTarget = currentColorBtn.current;
    tmpTarget.addEventListener('mousemove', (e) => {
      colorMove(e);
    })
  }

  const colorMove = (e) => {
    const tmpTarget = currentColorBtn.current;
    // console.log('e-', e, e.target);
    console.log('e', e.layerX, e.layerY);
    TweenMax.to(tmpTarget, 0, { x: e.layerX, y: e.layerY });
  }

  return (
    <div
      className="color-btn"
      ref={currentColorBtn}
      style={{ backgroundColor: tmpRGB }}
      onClick={() => !mixerMode && colorSwitcher(colorSettings)}
      onTouchStart={() => !mixerMode && colorSwitcher(colorSettings)}
      onDoubleClick={() => mixerMode && colorSwitcher(colorSettings)}
      onMouseEnter={() => mixerMode && colorTransform('enter')}
      onMouseLeave={() => mixerMode && colorTransform('leave')}
      onMouseDown={(e) => mixerMode && colorDown()}
      onMouseUp={(e) => mixerMode && colorUp()}
      onMouseMove={(e) => mixerMode && colorMove(e)}
    >
    </div>
  );
};
