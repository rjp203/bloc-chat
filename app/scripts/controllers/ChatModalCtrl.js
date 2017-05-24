(function () {
  function ChatModalCtrl($uibModalInstance, $scope) {
    $scope.room = '';
    $scope.ok = function() {
      $uibModalInstance.close($scope.room);
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  };

  angular
    .module('blocChat')
    .controller('ChatModalCtrl', ['$uibModalInstance', '$scope', ChatModalCtrl])
})();
