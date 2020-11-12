// action
import { actionFilterList } from '../action/action';

// toolkit
import { findSpecificRgbItemIndex, isColorSame } from '../toolkit/toolkit';

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
      resultArr = [...state];
      const index = resultArr.findIndex((item) => { return isColorSame(item, action) });
      resultArr.splice(index, 1);

      return resultArr
    case actionFilterList.REVERSE:
      console.log('REVERSE');
      return action
    case actionFilterList.ERASE:
      console.log('ERASE');
      return action
  }
}