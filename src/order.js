function takeOrder(orderNumber, arr) {
  if (arr.length < 3) {
    arr.push(orderNumber)
  };
};

function refundOrder(orderNumber, arr) {
  arr.splice((orderNumber - 1), 1)
};

function listItems(arr){
  var string = '';
  for (var i  = 0; i < arr.length-1; i++) {
    string += (arr[i].item + ", ") ;
  };
  string += arr[arr.length-1].item;
  return string;
};

function searchOrder(arr, str) {
  for (var i = 0; i < arr.length; i++){
    if (arr[i].item === str){
      return true
    }  
  } 
  return false;
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}