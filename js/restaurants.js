restaurantList.controller('RestaurantCtrl', function RestaurantCtrl($scope){
  $scope.restaurants = [
    { name: "Cultured Caveman", type: "Food cart",  location: "Downtown", price: "$$"},
    { name: "McDonald's", type: "Fast Food",  location: "Everywhere", price: "$"},
    { name: "Pizza Hut", type: "Pizza",  location: "Almost Everywhere", price: "Too much for garbage"}
  ];

  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName, type: $scope.restaurantType, location: $scope.restaurantLocation, price: $scope.restaurantPrice });
    $scope.restaurantName = null;
    $scope.restaurantLocation = null;
    $scope.restaurantType = null;
    $scope.restaurantPrice = null;
  };

  $scope.deleteRestaurantName = function() {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };
});
