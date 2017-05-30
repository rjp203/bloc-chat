(function() {
  function Cookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/chatusername.html',
        controller: 'ChatUsernameCtrl',
        controllerAs: '$ctrl',
        backdrop: 'static',
        size: 'sm'
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', Cookies]);
})();
