// library
import React, { useEffect, useRef } from 'react';

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

  const onClick = () => {
    colorSettings.type = actionFilterList.COLOR;
    colorReducerDispatch(colorSettings);
  }

  const onRemove = () => {
    colorSettings.type = actionFilterList.COLOR_REMOVE;
    colorReducerDispatch(colorSettings);
  }

  const onEnter = () => {
    colorSettings.type = actionFilterList.COLOR_ENTER;
    colorReducerDispatch(colorSettings);
  }

  const onLeave = () => {
    colorSettings.type = actionFilterList.COLOR_LEAVE;
    colorReducerDispatch(colorSettings);
  }

  const onUp = () => {
    colorSettings.isDown = false;
    colorSettings.type = actionFilterList.COLOR_UP;
    colorReducerDispatch(colorSettings);
  }

  const onDown = () => {
    colorSettings.isDown = true;
    colorSettings.type = actionFilterList.COLOR_DOWN;
    colorReducerDispatch(colorSettings);
  }

  useEffect(() => {
    colorSettings.ref = currentColorBtn.current;
    return
  })

  return (
    <div
      className="color-btn"
      ref={currentColorBtn}
      style={styleEnum}
      onClick={() => !mixerMode && onClick(colorSettings)}
      onTouchStart={() => !mixerMode && onClick(colorSettings)}
      onDoubleClick={() => mixerMode && onRemove(colorSettings)}
      onMouseEnter={() => mixerMode && onEnter()}
      onMouseLeave={() => mixerMode && onLeave()}
      onMouseUp={() => mixerMode && onUp()}
      onMouseDown={() => mixerMode && onDown()}
    >
    </div>
  );
};
