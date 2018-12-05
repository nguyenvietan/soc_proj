app.controller('ManagerTopController', ['$scope', '$http', function($scope, $http){
    
    $scope.resInfo = "123";
    $scope.showResInfo = function(info){
    	$scope.resInfo = info;

    };
    
    const timeSlot = ["12.00 pm", "12.30 pm", "1.00 pm"];
    const nTotalPeople = [20, 33, 25];
    const nReservations = [4, 5, 3];

// Reservation Info samples

	const resInfo1 = {time: "12.00pm", people: 5, name: "Son Heung-min", foods: "kimchi, chicken, seafoods", drinks: "Soju, Banana Milk", total: "$1100"};
	const resInfo2 = {time: "12.00pm", people: 5, name: "Park Hang-seo", foods: "Bibimbap, chicken, Japchae", drinks: "Omija tea, wine", total: "$1300"};
	const resInfo3 = {time: "12.00pm", people: 5, name: "Tom Cruise", foods: "Samgyeopsal, chicken, Sundubu-jjigae", drinks: "beer, wine", total: "$2000"};
	const resInfo4 = {time: "12.00pm", people: 5, name: "Donald Trump", foods: "Bulgogi, chicken, seafoods", drinks: "Cheongju, Baekseju", total: "$5300"};

// Time Slots:
    const detail_12_00_pm = [{no: 1, name: "Son Heung-min", people: 5, price: "$1100", resInfo: resInfo1},
    					{no: 2, name: "Park Hang-seo", people: 7, price: "$1300", resInfo: resInfo2},
    					{no: 3, name: "Tom Cruise", people: 3, price: "$2000", resInfo: resInfo3},
    					{no: 4, name: "Donald Trump", people: 5, price: "$5300", resInfo: resInfo4}];


    const detail_12_30pm = [{no: 1, name: "Mr. A", people: 5, price: "$1800", resInfo: resInfo1},
							{no: 2, name: "Mr. B", people: 7, price: "$1100", resInfo: resInfo2},
							{no: 3, name: "Mr. C", people: 3, price: "$2100", resInfo: resInfo3},
							{no: 4, name: "Mr. D", people: 5, price: "$3200", resInfo: resInfo4},
							{no: 5, name: "Mr. X", people: 13, price: "$7900", resInfo: resInfo1}
							];

    const detail_01_00pm = [{no: 1, name: "Mr. E", people: 15, price: "$9800", resInfo: resInfo1},
							{no: 2, name: "Mr. F", people: 3, price: "$1300", resInfo: resInfo2},
							{no: 3, name: "Mr. G", people: 7, price: "$2700", resInfo: resInfo3},
							];


    $scope.resList = [
	    					{col1: "collapse1", col1s: "#collapse1", head1:"heading1", 
	    									time: timeSlot[0], people: nTotalPeople[0], res: nReservations[0], detail: detail_12_00_pm},
	    					{col1: "collapse2", col1s: "#collapse2", head2:"heading2", 
	    									time: timeSlot[1], people: nTotalPeople[1], res: nReservations[1], detail: detail_12_30pm},
	    					{col1: "collapse3", col1s: "#collapse3", head3:"heading3", 
	    									time: timeSlot[2], people: nTotalPeople[2], res: nReservations[2], detail: detail_01_00pm}
    					];


}]);
