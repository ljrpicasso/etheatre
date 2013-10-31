angular.module('myApp.controllers', [])
.controller('HomeController', 
  function($scope, session, SessionService, ArticleService, Share) {
	$scope.user = session.user;
	$scope.articles = ArticleService.getLatestFeed();
});