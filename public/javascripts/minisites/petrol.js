function PetrolCtrl($scope) {

    $scope.fuel = null;
    $scope.distance = null;
    $scope.cost = null;
    $scope.persons = null;
    $scope.metric = false;
    $scope.units = {fuel: 'gallons', distance: 'miles', economy: 'Miles/Gallon'};

    $scope.toggleImperial = function() {
            $scope.units = {fuel: 'gallons', distance: 'miles', economy: 'Miles/Gallon'};
    };

    $scope.toggleMetric = function() {
            $scope.units = {fuel: 'litres', distance: 'kilometers', economy: 'Kilometers/Litre'};
    };
}