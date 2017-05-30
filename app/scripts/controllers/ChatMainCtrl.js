(function() {
  function ChatMainCtrl($uibModal, Room, Message, $scope) {
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
        $scope.rooms.$add(name);
      })
    }
    $scope.activeRoom = function(room) {

      Message.setRoom(room.$id);

      $scope.currentRoomTitle = room.$value;

      $scope.currentRoomMessages = Message.getByRoomId(room.$id);

    }
  }

  angular
    .module('blocChat')
    .controller('ChatMainCtrl', ['$uibModal', 'Room', 'Message', '$scope', ChatMainCtrl]);
})();
