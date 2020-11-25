// library
import React, { useEffect, useRef } from 'react';
import { gsap, TweenMax, Back} from "gsap/all";
gsap.registerPlugin(TweenMax, Back);

// scss
import '../scss/color-btn.scss';

// action
import { actionFilterList } from '../action/action';

export const ColorBtn = (props) => {
  const { colorSettings, colorReducerDispatch, mixerMode, index } = props;
  const currentColorBtn = useRef(null);

  const styleEnum = {
    backgroundColor: 'rgb(' + colorSettings.rgb.r + ',' + colorSettings.rgb.g + ',' + colorSettings.rgb.b + ')',
    top: window.innerHeight / 2,
    left: !index && index !== 0 ? window.innerWidth / 2 : window.innerWidth / 2 - ((index * -1) * 30) // make 2 color mixer btns stay with order from left to right.
  }

  const onEnter = () => {
    colorSettings.isDown = false
    colorSettings.ref = currentColorBtn.current
    colorSettings.type = actionFilterList.COLOR_ENTER
    colorReducerDispatch(colorSettings)
  }

  const onLeave = () => {
    colorSettings.isDown = false
    colorSettings.ref = currentColorBtn.current
    colorSettings.type = actionFilterList.COLOR_LEAVE
    colorReducerDispatch(colorSettings)
  }

  const onUp = () => {
    colorSettings.isDown = false
    colorSettings.ref = currentColorBtn.current
    colorSettings.type = actionFilterList.COLOR_UP
    colorReducerDispatch(colorSettings)
  }

  const onDown = () => {
    colorSettings.isDown = true
    colorSettings.ref = currentColorBtn.current
    colorSettings.type = actionFilterList.COLOR_DOWN
    colorReducerDispatch(colorSettings)
  }

  // const onMove = () => {
  //   console.log('onMove !!!');
  //   colorSettings.ref = currentColorBtn.current
  //   colorSettings.type = actionFilterList.COLOR_MOVE
  //   colorReducerDispatch(colorSettings)
  // }

  // useEffect(() => {})

  return (
    <div
      className="color-btn"
      ref={currentColorBtn}
      style={styleEnum}
      onClick={() => !mixerMode && colorReducerDispatch(colorSettings)}
      onTouchStart={() => !mixerMode && colorReducerDispatch(colorSettings)}
      onDoubleClick={() => mixerMode && colorReducerDispatch(colorSettings)}
      onMouseEnter={() => mixerMode && onEnter()}
      onMouseLeave={() => mixerMode && onLeave()}
      onMouseUp={() => mixerMode && onUp()}
      onMouseDown={() => mixerMode && onDown()}
      // onMouseMove={() => mixerMode && colorSettings.isDown && onMove()}
    >
    </div>
  );
};
