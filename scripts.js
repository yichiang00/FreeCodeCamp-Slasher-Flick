
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var result=[];
  console.log(arr.legth);

  if(arr.legth>howMany)
  {
    console.log("before"+arr);
    arr.splice(0,howMany)
    console.log("splice"+arr);
    result.push(arr);
  }
  return result;
}

slasher([1, 2, 3], 2);
