// action
import { actionFilterList } from '../action/action';

// toolkit
import { findSpecificRgbItemIndex } from '../toolkit/toolkit';

export const colorReducer = (state, action) => {
  console.log('state-', state);
  console.log('action-', action);

  let resultArr = [];

  switch (action.type) {
    case actionFilterList.COLOR:
      resultArr = [...state];
      switch(true){
        case resultArr.length < 2 :
          resultArr.push(action)
          break;
        case resultArr.length == 2 :
          resultArr[1] = action
          break;
      }

      return resultArr
    case actionFilterList.COLOR_REMOVE:
      console.log('COLOR_REMOVE');
      resultArr = [...state];
      // index = findSpecificRgbItemIndex(resultArr, action);
      // console.log('index-', index);
      // console.log('resultArr-', resultArr);
      // resultArr.splice(index, 1);

      return resultArr
    case actionFilterList.REVERSE:
      console.log('REVERSE');
      return action
    case actionFilterList.ERASE:
      console.log('ERASE');
      return action
  }
}