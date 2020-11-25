// action
import { actionFilterList } from '../action/action';

// toolkit
import { isColorSame, colorEnter, colorLeave, colorMove } from '../toolkit/toolkit';

export const colorReducer = (state, action) => {
  console.log('state-', state);
  console.log('action-', action);

  let resultArr = [...state];
  const index = resultArr.findIndex((item) => { return isColorSame(item, action) });

  switch (action.type) {
    case actionFilterList.COLOR:
      // TO DO : mistake-proof for first time same color clicking.
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
    case actionFilterList.COLOR_MOVE:
      resultArr[index] = action;
      colorMove(action);

      return resultArr
    case actionFilterList.REVERSE:
      console.log('REVERSE');
      return action
    case actionFilterList.ERASE:
      console.log('ERASE');
      return action
  }
}