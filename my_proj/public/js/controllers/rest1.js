app.controller('Rest1_Controller', ['$scope','$http', function($scope,$http){

// Initialize and add the map
$scope.initMap = function() {
  var uluru = {lat: -25.344, lng: 131.036};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 5, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
}

$scope.initMap();

$scope.date="01/01/2019";
$scope.time="07:30PM";

}]);


