function breakOut(someArray, changeValue, stopValue){
  someArray.forEach((element,index,array) => {
    if (array[index] === stopValue){
      break
    }else {
      array[index] = changeValue
    }
  })
}
