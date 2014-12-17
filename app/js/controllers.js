'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp',[]);
phonecatApp.controller('PhoneListCtrl', function($scope){
	$scope.phones = [
		{
			'name' : 'Nenus S',
			'snippnet' : 'Fast just'
		},{
			'name' : 'Motorola',
			'snippnet' : 'Fast just'
		},{
			'name' : 'Xoom',
			'snippnet' : 'Fast just'
		}
	];
});