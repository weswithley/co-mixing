import { gsap, TweenMax, Back } from "gsap/all";
gsap.registerPlugin(TweenMax, Back);

export const isColorSame = (oldColorSetting, newColorSetting) => {
  return oldColorSetting.rgb.r === newColorSetting.rgb.r && oldColorSetting.rgb.g === newColorSetting.rgb.g && oldColorSetting.rgb.b === newColorSetting.rgb.b
}

export const colorEnter = (ref) => {
  TweenMax.to(ref, 0.2, { scale: 3, easeInOut: Back.easeInOut });
}

export const colorLeave = (ref) => {
  TweenMax.to(ref, 0.2, { scale: 1, easeInOut: Back.easeInOut });
}

export const colorUp = () => {
  document.querySelector('.mixer').removeEventListener('mousemove', colorMove);
}

export const colorDown = () => {
  document.querySelector('.mixer').addEventListener('mousemove', colorMove);
}

export const colorMove = (ref) => {
  const e = window.event;
  TweenMax.to(ref, 0.2, { left: e.clientX, top: e.clientY });
}

export const hitTest = (colorUpdateNewEnum) => {
  // TO-DO : need enhance for bigger than 2 length array case.

  const targetList = document.querySelectorAll('.mixer .color-btn');
  const rect1 = targetList[0].getBoundingClientRect();
  const rect2 = targetList[1].getBoundingClientRect();
  const result = !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom)
  return result
}