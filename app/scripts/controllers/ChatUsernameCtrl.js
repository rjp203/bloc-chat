(function () {
  function ChatUsernameCtrl($uibModalInstance, $cookies, $scope) {
    $scope.username = '';
    $scope.submit = function() {
      $cookies.put('blocChatCurrentUser', $scope.username);
      $uibModalInstance.close();
    };
  };

  angular
    .module('blocChat')
    .controller('ChatUsernameCtrl', ['$uibModalInstance', '$cookies', '$scope', ChatUsernameCtrl]);
})();
