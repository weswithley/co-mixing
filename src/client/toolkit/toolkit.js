// gsao library
import { gsap } from "gsap/all";

export const isColorSame = (oldColorSetting, newColorSetting) => {
  return oldColorSetting.rgb.r === newColorSetting.rgb.r && oldColorSetting.rgb.g === newColorSetting.rgb.g && oldColorSetting.rgb.b === newColorSetting.rgb.b
}

export const colorEnter = (ref) => {
  ref.style.zIndex = 100;
  gsap.to(ref, { duration: 0.2, scale: 3, ease: "Back.inOut" });
}

export const colorLeave = (ref) => {
  ref.style.zIndex = 0;
  gsap.to(ref, { duration: 0.2, scale: 1, ease: "Back.inOut" });
}

export const colorUp = () => {
  document.querySelector('.mixer').removeEventListener('mousemove', colorMove);
}

export const colorDown = () => {
  document.querySelector('.mixer').addEventListener('mousemove', colorMove);
}

export const colorMove = (ref) => {
  const e = window.event;
  gsap.to(ref, { duration: 0.01, left: e.clientX, top: e.clientY, ease: "Back.inOut" });
}

export const hitTest = (rect1, rect2) => {
  const isHit = !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
  return isHit
}

export const checkHitTest = (colorUpdateNewEnum) => {
  const resultEnum = {
    'hitList' : [],
    'nonHitLsit' : []
  };

  console.log('00000');

  const currentColorSetting = colorUpdateNewEnum.filter((color) => { return color.isDown })[0];

  colorUpdateNewEnum.forEach((color) => {
    const isEqualToCurrentSelectedColor = color.isDown;
    const isColorRefNull = !color.ref;
    console.log('111111');
    // console.log('isEqualToCurrentSelectedColor-', isEqualToCurrentSelectedColor);
    // console.log('isColorRefNull-', isColorRefNull);
    // console.log('------');
    if (isEqualToCurrentSelectedColor || isColorRefNull){ return }
    console.log('222222');

    const rect1 = currentColorSetting.ref.getBoundingClientRect();
    const rect2 = color.ref.getBoundingClientRect();
    console.log('rect12-', rect1, rect2);
    if (hitTest(rect1, rect2)){
      console.log('hit-color-', color);
      resultEnum['hitList'].push(color);
    }else{
      console.log('nonHit-color-', color);
      resultEnum['nonHitLsit'].push(color);
    }
  })

  return resultEnum
}

// export const checkHitTest = (colorSettings, colorUpdateNewEnum) => {
//   const resultEnum = {
//     'hitList' : [],
//     'nonHitLsit' : []
//   };
//   colorUpdateNewEnum.forEach((color) => {
//     const isEqualToCurrentSelectedColor = color.isDown;
//     const isColorRefNull = !color.ref;
//     if (isEqualToCurrentSelectedColor || isColorRefNull){ return }

//     const rect1 = colorSettings.ref.getBoundingClientRect();
//     const rect2 = color.ref.getBoundingClientRect();
//     if (!(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom)){
//       resultEnum['hitList'].push(color);
//     }else{
//       resultEnum['nonHitLsit'].push(color);
//     }
//   })

//   return resultEnum
// }

export const afterHitTest = (hitRef) => {
  colorEnter(hitRef);
  // gsap.to(hitRef, { duration: 0.2, scale: 1.3, ease: "Back.inOut" });
}

export const resetHitTest = (hitRef) => {
  // colorLeave(hitRef);
  gsap.set(hitRef, { scale: 1 });
}