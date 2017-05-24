(function() {
  function ChatMainCtrl($uibModal, Room, $scope) {
    $scope.rooms = Room.all;

    $scope.open = function() {
      var modalInstance = $uibModal.open({
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/templates/chatmodal.html',
        controller: 'ChatModalCtrl',
        controllerAs: 'modalCtrl',
        size: 'md'
      });
      modalInstance.result.then(function(name){
        console.log(name);
        $scope.rooms.$add(name);
      })
    }
  }

  angular
    .module('blocChat')
    .controller('ChatMainCtrl', ['$uibModal', 'Room', '$scope', ChatMainCtrl])
})();
