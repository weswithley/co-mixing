// library
import React from 'react';

// scss
import '../scss/color-btn.scss';

export const ColorBtn = (props) => {
  const { colorSettings } = props;
  const tmpRGB = 'rgb(' + colorSettings.rgb.r + ',' + colorSettings.rgb.g + ',' + colorSettings.rgb.b + ')';
  console.log('tmpRGB-', tmpRGB);
  return (
    <div className="color-btn" style={{ backgroundColor: tmpRGB }}></div>
  );
};
