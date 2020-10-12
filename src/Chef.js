class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(custName, isMorning) {
    if (isMorning) {
      return `Good morning, ${custName}!`
    }else{
    return `Hello, ${custName}!`
    }
  }

  checkForFood(foodItem){
    var mealType = foodItem.type;
    var foodArray = this.restaurant.menus[mealType];
    for (var i = 0; i < foodArray.length; i++){
    if (foodArray[i].name === foodItem.name){
      return `Yes, we're serving ${foodItem.name} today!`
    }
  }
  return `Sorry, we aren't serving ${foodItem.name} today.`
}
};


module.exports = Chef;