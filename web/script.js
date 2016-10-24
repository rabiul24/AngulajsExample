function OrderFormController($scope){
	$scope.services = [
		{
			name: 'Tutorials Development',
			price: 500,
			active:true
		},{
			name: 'Tutorials Design',
			price: 300,
			active:false
		},{
			name: 'Code Integration',
			price: 250,
			active:false
		},{
			name: 'Training',
			price: 220,
			active:false
		}
	];
	$scope.toggleActive = function(s){
		s.active = !s.active;
	};
        
	$scope.total = function(){
		var total = 0;
		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price;
			}
		});
		return total;
	};
}
