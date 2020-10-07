function nameMenuItem(name) {
    return "Delicious " + name
};

function createMenuItem(nameMenuItem, itemPrice, itemType) {
    var menuItem = {
      name: nameMenuItem,
      price: itemPrice,
      type: itemType
    };
    return menuItem;
};

function addIngredients(ingredient, arr){
  if (!arr.includes(ingredient)) { 
  arr.push(ingredient);
  }
};

function formatPrice(price){
  return "$" + price;
};

function decreasePrice(price) {
  var discount = (price * .1);
  return price - discount;
};

function createRecipe(recTitle, recIngredients, recType) {
  var recipe = {
    title: recTitle,
    ingredients: recIngredients,
    type: recType
  };
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


