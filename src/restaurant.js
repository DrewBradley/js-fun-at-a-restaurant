function createRestaurant(name) {
  var pizzaRestaurant = {
          name: name,
          menus: {breakfast: [], 
                  lunch: [], 
                  dinner: []},
  }
  return pizzaRestaurant;
}

function addMenuItem(eateryName, item){
    if (!eateryName.menus[item.type].includes(item)){
    eateryName.menus[item.type].push(item);
  }
};

function removeMenuItem(eateryName, name, meal){
  var passedItem = (food) => (food.name === name);
  if (eateryName.menus[meal].some(passedItem)){
  eateryName.menus[meal].splice(name, 1);
  return `No one is eating our ${name} - it has been removed from the ${meal} menu!`;
  }else{
   return `Sorry, we don't sell ${name}, try adding a new recipe!`
  };
};


module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}