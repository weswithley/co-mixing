// gsao library
import { gsap } from "gsap/all";

export const isColorSame = (oldColorSetting, newColorSetting) => {
  return oldColorSetting.rgb.r === newColorSetting.rgb.r && oldColorSetting.rgb.g === newColorSetting.rgb.g && oldColorSetting.rgb.b === newColorSetting.rgb.b
}

export const colorEnter = (ref) => {
  ref.style.zIndex = 100;
  gsap.to(ref, {
      duration: 0.2,
      scale: 2,
      ease: "Back.inOut"
    }
  );
}

export const colorLeave = (ref) => {
  ref.style.zIndex = 0;
  gsap.to(ref, {
      duration: 0.2,
      scale: 1,
      ease: "Back.inOut"
    }
  );
}

export const colorMove = (colorRef) => {
  const e = window.event;
  gsap.to(colorRef, {
      duration: 0.01,
      left: e.clientX,
      top: e.clientY,
      ease: "Back.inOut"
    }
  );
}

export const hitTest = (rect1, rect2) => {
  const isSmallerThanRect2Left = rect1.left + rect1.width < rect2.left; // rect1.right < rect2.left
  const isGreaterThanRect2Right = rect1.left > rect2.left + rect2.width; // rect1.left > rect2.right
  const isSmallerThanRect2Top = rect1.top + rect1.height < rect2.top; // rect1.bottom < rect2.top
  const isGreaterThanRect2Bottom = rect1.top > rect2.top + rect2.height; // rect1.top > rect2.bottom
  const isHit = !(isSmallerThanRect2Left || isGreaterThanRect2Right || isSmallerThanRect2Top || isGreaterThanRect2Bottom);
  return isHit
}

export const checkHitTest = (colorUpdateNewEnum) => {
  const currentColorSetting = colorUpdateNewEnum.filter((color) => { return color.isDown })[0];

  colorUpdateNewEnum.forEach((color) => {
    const isEqualToCurrentSelectedColor = color.isDown;
    const isColorRefNull = !color.ref;
    if (isEqualToCurrentSelectedColor || isColorRefNull){ return }
    const rect1 = currentColorSetting.ref.getBoundingClientRect();
    const rect2 = color.ref.getBoundingClientRect();
    const isHit = hitTest(rect1, rect2);

    if (isHit){
      if (currentColorSetting.isHit || color.isHit){ return }
      const resultR = Math.floor((currentColorSetting.rgb.r + color.rgb.r) / 2);
      const resultG = Math.floor((currentColorSetting.rgb.g + color.rgb.g) / 2);
      const resultB = Math.floor((currentColorSetting.rgb.b + color.rgb.b) / 2);
      const resultRGB = 'rgb(' + resultR + ',' + resultG + ',' + resultB + ')';

      currentColorSetting.isHit = true;
      currentColorSetting.ref.style.zIndex = 100;

      gsap.to(currentColorSetting.ref, {
          duration: 0.2,
          ease: "Back.inOut",
          backgroundColor: resultRGB
        }
      );

      currentColorSetting.rgb = {
        'r' : resultR,
        'g' : resultG,
        'b' : resultB
      };

      color.isHit = true;
      color.ref.style.zIndex = 0;

      gsap.to(color.ref, {
          duration: 0.2,
          scale: 2,
          ease: "Back.inOut",
          backgroundColor: resultRGB
        }
      );

    }else{
      const resultCurrentRGB = 'rgb(' + currentColorSetting.originRgb.r + ',' + currentColorSetting.originRgb.g + ',' + currentColorSetting.originRgb.b + ')';
      const resultColorRGB = 'rgb(' + color.originRgb.r + ',' + color.originRgb.g + ',' + color.originRgb.b + ')';

      currentColorSetting.isHit = color.isHit = false;
      color.ref.style.zIndex = 0;
      gsap.to(currentColorSetting.ref, {
          duration: 0.2,
          ease: "Back.inOut",
          backgroundColor: resultCurrentRGB
        }
      );

      gsap.to(color.ref, {
          duration: 0.2,
          scale: 1,
          ease: "Back.inOut",
          backgroundColor: resultColorRGB
        }
      );

      currentColorSetting.rgb = {
        'r': currentColorSetting.originRgb.r,
        'g': currentColorSetting.originRgb.g,
        'b': currentColorSetting.originRgb.b
      };

      color.rgb = {
        'r': color.originRgb.r,
        'g': color.originRgb.g,
        'b': color.originRgb.b
      };

    }
  })
}

export const getCoMixer = (colorUpdateNewEnum) => {
  colorUpdateNewEnum[0].isHit = false;
  colorUpdateNewEnum[0].originRgb = colorUpdateNewEnum[0].rgb;
  colorUpdateNewEnum = [colorUpdateNewEnum[0]];
  console.log('colorUpdateNewEnum-', colorUpdateNewEnum);
  return colorUpdateNewEnum
}