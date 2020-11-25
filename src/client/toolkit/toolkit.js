import { gsap, TweenMax, Back } from "gsap/all";
gsap.registerPlugin(TweenMax, Back);

export const isColorSame = (oldValue, newValue) => {
  return oldValue.rgb.r === newValue.rgb.r && oldValue.rgb.g === newValue.rgb.g && oldValue.rgb.b === newValue.rgb.b
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

export const colorMove = (e, ref) => {
  console.log('ref-', ref);
  // TweenMax.to(ref, 0.2, { left: e.layerX, top: e.layerY });
  // if(hitTest()){
    // TO DO :
    // 1.trans first item's color in arry.
    // 2.change first item's props in array.
    // 3.remove the second item in array.
  // }
}

const hitTest = () =>{
  const targetList = document.querySelectorAll('.mixer .color-btn');
  const rect1 = targetList[0].getBoundingClientRect();
  const rect2 = targetList[1].getBoundingClientRect();
  const result = !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top ||rect1.top > rect2.bottom);
  console.log('result', result);
  return result
}