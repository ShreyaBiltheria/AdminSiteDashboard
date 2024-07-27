document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatBox = document.querySelector('.chat-box');

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const userMessage = chatInput.value.trim();
        if (userMessage) {
            // Display user's message
            displayMessage('me', userMessage);

            // Clear input field
            chatInput.value = '';

            // Simulate bot response
            setTimeout(() => {
                displayMessage('bot', 'This is a simulated bot response.');
            }, 1000);
        }
    });

    function displayMessage(sender, message) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('msg', sender);
        
        const profile = document.createElement('div');
        profile.classList.add('profile');
        
        const username = document.createElement('span');
        username.classList.add('username');
        username.textContent = sender === 'me' ? 'You' : 'Bot';
        
        const time = document.createElement('span');
        time.classList.add('time');
        time.textContent = new Date().toLocaleTimeString().slice(0, 5); // Format time

        profile.appendChild(username);
        profile.appendChild(time);

        const chat = document.createElement('div');
        chat.classList.add('chat');
        
        const chatText = document.createElement('p');
        chatText.textContent = message;
        
        chat.appendChild(profile);
        chat.appendChild(chatText);

        messageContainer.appendChild(chat);
        chatBox.appendChild(messageContainer);

        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }
});
