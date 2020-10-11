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

  checkForFood(foodName){
    var foodProperty = foodName;
    var passedFood = foodName.hasOwnProperty(foodProperty)
    if (passedFood){
      return `Yes, we're serving ${foodName.name} today!`
    }
    return `Sorry, we aren't serving ${foodName.name} today.` 
  }
};


module.exports = Chef;