function createRestaurant(name) {
  var pizzaRestaurant = {
          name: name,
          menus: {breakfast: [], 
                  lunch: [], 
                  dinner: []},
  }
  return pizzaRestaurant;
}

function addMenuItem(place, item){
    if (!place.menus[item.type].includes(item)){
    place.menus[item.type].push(item);
  }
};

function removeMenuItem(place, name, meal){
  var passedItem = (food) => (food.name === name);
  if (place.menus[meal].some(passedItem)){
  place.menus[meal].splice(name, 1);
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