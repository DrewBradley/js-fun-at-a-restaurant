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
    if (foodItem.name){
      return `Yes, we're serving ${foodItem.name} today!`
    } else {
    return `Sorry, we aren't serving ${foodItem.name} today.`
    }
  }
}

// function removeMenuItem(eateryName, name, meal){
//   var passedItem = (food) => (food.name === name);
//   if (eateryName.menus[meal].some(passedItem)){
//   eateryName.menus[meal].splice(name, 1);
//   return `No one is eating our ${name} - it has been removed from the ${meal} menu!`;
//   }else{
//    return `Sorry, we don't sell ${name}, try adding a new recipe!`
//   };

module.exports = Chef;