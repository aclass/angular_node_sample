angular.module('todoService', [])

	// super simple service
	// each function returns a promise object
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				console.log('get!');
				const data = $http.get('/api/todos');
				return data;
			},
			create : function(todoData) {
				const data = $http.post('/api/todos', todoData);
				console.log(data);
				console.log(data.length);
				return data;
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			}
		}
	}]);