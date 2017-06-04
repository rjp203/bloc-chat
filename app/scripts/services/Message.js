(function() {
  function Message($firebaseArray, $cookies) {
    var currentRoom = '';
    var Message = {};
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      // Filter the messages by their room ID.
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    Message.setRoom = function(roomId){
      currentRoom = roomId;
    };

    Message.send = function(newMessage) {
      messages.$add ({
        content:newMessage,
        roomId:currentRoom,
        sentAt: Date.now(),
        username:$cookies.get('blocChatCurrentUser')
      });
    };

    return Message;
    }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
