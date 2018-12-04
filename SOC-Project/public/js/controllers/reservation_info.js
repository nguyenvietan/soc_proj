app.controller('ResInfoController', ['$scope', '$http', function($scope, $http){
    
    $scope.order_list = [
                            {"no": "1", "date": "11/30/2018", "name": "Gymkhana", "price": "$1100", "status": "pending"}, 
                            {"no": "2", "date": "10/28/2018", "name": "Portland", "price": "$980", "status": "pending"}, 
                            {"no": "3", "date": "05/09/2018", "name": "Gun Power", "price": "$1300", "status": "paid"}, 
                            {"no": "4", "date": "02/14/2018", "name": "Hawksmoor Spitalfields", "price": "$1200", "status": "paid"}
                          ];


}]);