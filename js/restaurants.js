restaurants.controller('RestaurantCtrl', function RestaurantCtrl($scope){
  $scope.restaurants = [
    { name: "Cultured Caveman" },
    { name: "McDonald's"},
    { name: "Pizza Hut"}
  ];

  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName});
    $scope.restaurantName = null;
  };

  $scope.addType = function() {
    $scope.restaurants.push({ type: $scope.restaurantType});
    $scope.restaurantType = null;
  };

  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName});
    $scope.restaurantName = null;
  };
  
});
