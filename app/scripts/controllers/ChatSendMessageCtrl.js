(function() {
  function ChatSendMessageCtrl(Message) {
    this.message = '';
    this.submit = function() {
      Message.send(this.message);
      this.message = '';
    };
  };

  angular
    .module('blocChat')
    .controller('ChatSendMessageCtrl', ['Message', ChatSendMessageCtrl]);
})();
