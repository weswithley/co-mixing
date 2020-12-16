// action
import { actionFilterList } from '../action/action';

// toolkit
import { isColorSame, colorEnter, colorLeave, colorMove, checkHitTest, getCoMixer  } from '../toolkit/toolkit';

export const colorReducer = (state, action) => {
  let resultArr = [...state];
  const index = resultArr.findIndex((item) => { return isColorSame(item, action) });

  switch (action.type) {
    case actionFilterList.COLOR:
      let currentColorSettings = {};
      Object.keys(action).forEach((key) => { currentColorSettings[key] = action[key] }); // deep clone.

      switch(true){
        case resultArr.length < 2 :
          const isDuplicatedColorExist = resultArr.filter((color) => { return isColorSame(color, currentColorSettings) }).length > 0;
          const isntResultArrEmpty = resultArr.length > 0;
          if (isntResultArrEmpty && isDuplicatedColorExist) { return resultArr }

          resultArr.push(currentColorSettings)
          break;
        case resultArr.length == 2 :
          resultArr[1] = currentColorSettings;
          break;
      }

      return resultArr
    case actionFilterList.COLOR_REMOVE:
      resultArr.splice(index, 1);

      return resultArr
    case actionFilterList.COLOR_ENTER:
      resultArr[index] = action
      colorEnter(action.ref);

      return resultArr
    case actionFilterList.COLOR_LEAVE:
      resultArr[index] = action
      colorLeave(action.ref);

      return resultArr
    case actionFilterList.COLOR_UP:
      if(action.isHit){
        resultArr = getCoMixer(resultArr);
      }

      return resultArr
    case actionFilterList.COLOR_DOWN:
      resultArr[index] = action;

      return resultArr
    case actionFilterList.REVERSE:
      console.log('REVERSE');
      return action
    case actionFilterList.ERASE:
      console.log('ERASE');
      return action
  }
}

export const mixerReducer = (state, action) => {
  switch (action.type) {
    case actionFilterList.MIXER_MOVE:

      action.colorUpdateNewEnum.forEach((colorSettings) => {
        if (!colorSettings.isDown){ return }
        colorMove(colorSettings.ref);
      })

      checkHitTest(action.colorUpdateNewEnum);

      return state
    default:
      return state
  }

}