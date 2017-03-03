function addChatMessage(data, options) {
    var $usernameDiv = $('<span class="username"/>')
        .text(data.username)
    var $messageBodyDiv = $('<span class="messageBody">')
        .text(" : " + data.message);
    var $messageDiv = $('<li class="message"/>')
        .data('username', data.username)
        .append($usernameDiv, $messageBodyDiv);
    $('.messages').append($messageDiv);
    $('.messages')[0].scrollTop = $('.messages')[0].scrollHeight;
}
function cleanInput(input) {
    return $('<div/>').text(input).text();
}
$(window).keydown(function(event) {
    if (!(event.ctrlKey || event.metaKey || event.altKey)) {
        $('.inputMessage').focus();
    }
    if (event.which === 13) {
        sendMessage();
    }
});

function openNav() {
    $(".chatBar").css({'width' : "350px"});
    $(".container").css({'marginRight' : "350px"});
}

function closeNav() {
    $(".chatBar").css({'width' : "0px"});
    $(".container").css({'marginRight' : "0px"});
}
