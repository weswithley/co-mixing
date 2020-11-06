// library
import React, { useReducer } from 'react';

// scss
import '../scss/color-btn.scss';

export const ColorBtn = (props) => {
  let { colorSettings, colorSwitcher } = props;
  const tmpRGB = 'rgb(' + colorSettings.rgb.r + ',' + colorSettings.rgb.g + ',' + colorSettings.rgb.b + ')';

  return (
    <div
      className="color-btn"
      style={{ backgroundColor: tmpRGB }}
      onClick={() => colorSwitcher(colorSettings)}
      onTouchStart={() => colorSwitcher(colorSettings)}
    >
    </div>
  );
};
