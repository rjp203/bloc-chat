(function() {
  function ChatMainCtrl(Room, $scope) {
    $scope.rooms = Room.all;
  }

  angular
    .module('blocChat')
    .controller('ChatMainCtrl', ['Room', "$scope", ChatMainCtrl]);
})();
