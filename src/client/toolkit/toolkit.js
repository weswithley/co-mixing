import { gsap, TweenMax, Back } from "gsap/all";
gsap.registerPlugin(TweenMax, Back);

// var
let currentTarget = null;

export const isColorSame = (oldValue, newValue) => {
  return oldValue.rgb.r === newValue.rgb.r && oldValue.rgb.g === newValue.rgb.g && oldValue.rgb.b === newValue.rgb.b
}

export const colorEnter = (target) => {
  currentTarget = target;
  TweenMax.to(target, 0.2, { scale: 3, easeInOut: Back.easeInOut });
}

export const colorLeave = () => {
  TweenMax.to(currentTarget, 0.2, { scale: 1, easeInOut: Back.easeInOut });
}

export const colorDown = () => {
  document.querySelector('.mixer').addEventListener('mousemove', colorMove );
}

export const colorUp = () => {
  document.querySelector('.mixer').removeEventListener('mousemove', colorMove);
}

export const colorMove = (e) => {
  const IsColorBtn = e.target.className === currentTarget.className
  if (IsColorBtn) { return }

  TweenMax.to(currentTarget, 0.2, { left: e.layerX, top: e.layerY });
}

const hitTest = (target1, target2) =>{
  const rect1 = target1.getBoundingClientRect();
  const rect2 = target2.getBoundingClientRect();
  let result = null;
  result = !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top ||rect1.top > rect2.bottom);
  console.log('rect1', rect1);
  console.log('rect2', rect2);
  console.log('result', result);
  return result
}