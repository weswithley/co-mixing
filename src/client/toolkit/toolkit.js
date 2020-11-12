export const isColorSame = (oldValue, newValue) => {
  return oldValue.rgb.r === newValue.rgb.r && oldValue.rgb.g === newValue.rgb.g && oldValue.rgb.b === newValue.rgb.b
}

export const findSpecificRgbItemIndex = (arr, setting) => {
  let resultArr = [];
  resultArr = arr.map((loopItem, tmpIndex) => {
    if (isColorSame(loopItem, tmpIndex)){
      return tmpIndex
    }else{
      return null
    }
  }).filter((filterItem) => { return !!filterItem || resultArr == 0 })

  return resultArr[0]
}