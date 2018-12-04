app.controller('ResultsController', ['$scope', '$http', function($scope, $http){
    
    $scope.img_src_1 = [
                            {"name": "Gymkhana", "src":"./images/rest1.jpg",}, 
                            {"name": "Portland", "src":"./images/rest2.jpg"}, 
                            {"name": "Gun Power", "src":"./images/rest3.jpg"}, 
                            {"name": "Hawksmoor Spitalfields", "src":"./images/rest4.jpg"}
                          ];

    $scope.img_src_2 = [
                            {"name": "The Wolseley", "src":"./images/rest5.jpg"}, 
                            {"name": "Mayfair", "src":"./images/rest6.jpg"}, 
                            {"name": "Soho", "src":"./images/rest7.jpg"}, 
                            {"name": "Covent Garden", "src":"./images/rest8.jpg"}, 
                          ];


}]);
