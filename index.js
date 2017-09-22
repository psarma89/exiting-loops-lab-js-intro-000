function breakOut(array, changeValue, stopValue){
  array.forEach((element,index,array) => {
    if (array[index] === stopValue){
      break
    }else {
      array[index] = changeValue
    }
  })
}
