(function() {
  function config($locationProvider, $stateProvider) {

    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
      .state('chatmain', {
        url: '/',
        controller: 'ChatMainCtrl as chatMain',
        templateUrl: '/templates/chatmain.html'
    });
  }

  angular
    .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
    .config(config);
})();
