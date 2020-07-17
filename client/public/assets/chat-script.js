$(function() {
  // Get handle to the chat div
  var $chatWindow = $('#messages');

  // Our interface to the Chat service
  var chatClient;

  // A handle to the "group" chat channel - the one and only channel we
  // will have in this sample app
  var groupChannel;

  // The server will assign the client a random username - store that value
  // here
  var username;

  // Helper function to print info messages to the chat window
  function print(infoMessage, asHtml) {
    var $msg = $('<div class="info">');
    if (asHtml) {
      $msg.html(infoMessage);
    } else {
      $msg.text(infoMessage);
    }
    $chatWindow.append($msg);
  }

  // Helper function to print chat message to the chat window
  function printMessage(fromUser, message) {
    var $user = $('<span class="username">').text(fromUser + ':');
    if (fromUser === username) {
      $user.addClass('me');
    }
    var $message = $('<span class="message">').text(message);
    var $container = $('<div class="message-container">');
    $container.append($user).append($message);
    $chatWindow.append($container);
    $chatWindow.scrollTop($chatWindow[0].scrollHeight);
  }

  // Alert the user they have been assigned a random username
  print('Logging in...');

  // Get an access token for the current user, passing a username (identity)
  // and a device ID - for browser-based apps, we'll always just use the
  // value "browser"
  $.getJSON('http://localhost:5000/token', {
    device: 'browser'
  }, function(data) {


    // Initialize the Chat client
    Twilio.Chat.Client.create(data.token).then(client => {
      console.log('Created chat client');
      chatClient = client;
      chatClient.getSubscribedChannels().then(createOrJoinGroupChannel);

    // Alert the user they have been assigned a random username
    username = data.identity;
    print('You have been assigned a random username of: '
    + '<span class="me">' + username + '</span>', true);
    console.log(username);
    }).catch(error => {
      console.error(error);
      print('There was an error creating the chat client:<br/>' + error, true);
      print('Please check your .env file.', false);
    });
  });

  function createOrJoinGroupChannel() {
    // Get the group chat channel, which is where all the messages are
    // sent in this simple application
    print('Attempting to join group chat channel...');
    chatClient.getChannelByUniqueName('group')
    .then(function(channel) {
      groupChannel = channel;
      console.log('Found group channel:');
      console.log(groupChannel);
      setupChannel();
    }).catch(function() {
      // If it doesn't exist, let's create it
      console.log('Creating group channel');
      chatClient.createChannel({
        uniqueName: 'group',
        friendlyName: 'Group Chat Channel'
      }).then(function(channel) {
        console.log('Created group channel:');
        console.log(channel);
        groupChannel = channel;
        setupChannel();
      }).catch(function(channel) {
        console.log('Channel could not be created:');
        console.log(channel);
      });
    });
  }

  // Set up channel after it has been found
  function setupChannel() {
    // Join the group channel
    groupChannel.join().then(function(channel) {
      print('Joined channel as '
      + '<span class="me">' + username + '</span>.', true);
    });

    // Listen for new messages sent to the channel
    groupChannel.on('messageAdded', function(message) {
      printMessage(message.author, message.body);
    });
  }

  // Send a new message to the group channel
  var $input = $('#chat-input');
  $input.on('keydown', function(e) {

    if (e.keyCode == 13) {
      if (groupChannel === undefined) {
        print('The Chat Service is not configured. Please check your .env file.', false);
        return;
      }
      groupChannel.sendMessage($input.val())
      $input.val('');
    }
  });
});
