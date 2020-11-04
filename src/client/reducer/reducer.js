// library
import { mainEnum } from '../context/context';

// action
import { actionFilterList } from '../action/action';

export const colorReducer = (state = mainEnum.colorDefaultEnum[0], action) => {
  console.log('state', state);
  console.log('action', action);

  switch (action.type) {
    case actionFilterList.COLOR:
      console.log('COLOR');
      // e.target.style.backgroundColor
      return state
    case actionFilterList.REVERSE:
      console.log('REVERSE');
      return state
    case actionFilterList.ERASE:
      console.log('ERASE');
      return state
  }
}