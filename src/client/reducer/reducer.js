// action
import { actionFilterList } from '../action/action';

// toolkit
import { isColorSame, colorEnter, colorLeave, colorMove, hitTest } from '../toolkit/toolkit';

export const colorReducer = (state, action) => {
  let resultArr = [...state];
  const index = resultArr.findIndex((item) => { return isColorSame(item, action) });

  switch (action.type) {
    case actionFilterList.COLOR:
      switch(true){
        case resultArr.length < 2 :
          const isDuplicatedColorExist = resultArr.filter((color) => { return isColorSame(color, action) }).length > 0;
          const isntResultArrEmpty = resultArr.length > 0;
          if (isntResultArrEmpty && isDuplicatedColorExist) { return resultArr }

          resultArr.push(action)
          break;
        case resultArr.length == 2 :
          resultArr[1] = action
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
      resultArr[index] = action;

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

        const currentColorRef = colorSettings.ref;
        colorMove(currentColorRef);
      })

      if (hitTest()) {
        // TO DO :
        // 1.trans first item's color in arry.
        // 2.change first item's props in array.
        // 3.remove the second item in array.
        return action
      }

      return state
    default:
      return state
  }

}