function takeOrder(orderNumber, arr) {
  if (arr.length < 3) {
    arr.push(orderNumber)
  }
}

function refundOrder() {

}

module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}