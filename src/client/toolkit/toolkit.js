export const findSpecificRgbItemIndex = (arr, setting) => {
  let resultArr = [];
  resultArr = arr.map((loopItem, tmpIndex) => {
    if (loopItem.rgb.r === setting.rgb.r && loopItem.rgb.g === setting.rgb.g && loopItem.rgb.b === setting.rgb.b){
      return tmpIndex
    }else{
      return null
    }
  }).filter((filterItem) => { return !!filterItem || resultArr == 0 })

  return resultArr[0]
}