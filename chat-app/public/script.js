const socket = io();
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('messageInput');
const messagesList = document.getElementById('messages');

// Show old messages
socket.on('chat history', (msgs) => {
  msgs.forEach(addMessage);
});

// Show new message
socket.on('chat message', (msg) => {
  addMessage(msg);
});

function sendMessage() {
  const user = usernameInput.value || "Anonymous";
  const message = messageInput.value;
  if (message.trim()) {
    socket.emit('chat message', { user, message });
    messageInput.value = '';
  }
}

function addMessage({ user, message }) {
  const li = document.createElement('li');
  li.textContent = `${user}: ${message}`;
  messagesList.appendChild(li);
}
