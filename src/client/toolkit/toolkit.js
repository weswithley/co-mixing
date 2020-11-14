// library
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