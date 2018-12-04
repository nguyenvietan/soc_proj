app.controller('ResultsController', ['$scope', '$http', function($scope, $http){
    
    $scope.img_src_1 = [
                            {"name": "Gymkhana", "src":"../public/images/rest1.jpg", "link":"rest1.html"}, 
                            {"name": "Portland", "src":"../public/./images/rest2.jpg", "link":"rest1.html"}, 
                            {"name": "Gun Power", "src":"../public/./images/rest3.jpg", "link":"rest1.html"}, 
                            {"name": "Hawksmoor Spitalfields", "src":"../public/./images/rest4.jpg", "link":"rest1.html"}
                          ];

    $scope.img_src_2 = [
                            {"name": "The Wolseley", "src":"../public/./images/rest5.jpg", "link":"rest1.html"}, 
                            {"name": "Mayfair", "src":"../public/./images/rest6.jpg", "link":"rest1.html"}, 
                            {"name": "Soho", "src":"../public/./images/rest7.jpg", "link":"rest1.html"}, 
                            {"name": "Covent Garden", "src":"../public/./images/rest8.jpg", "link":"rest1.html"}, 
                          ];


}]);