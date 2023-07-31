document.addEventListener("DOMContentLoaded", function () {
    const chatbox = document.getElementById("chatbox");
    const userInput = document.getElementById("user-input");

    function addBotMessage(message) {
        const botMessage = document.createElement("p");
        botMessage.innerHTML = "<strong>Chatbot:</strong> " + message;
        chatbox.appendChild(botMessage);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage === "") return;

        // Clear user input
        userInput.value = "";

        // Display user message
        const userMessageElement = document.createElement("p");
        userMessageElement.innerHTML = "<strong>You:</strong> " + userMessage;
        chatbox.appendChild(userMessageElement);

        // Respond to user message
        const response = getBotResponse(userMessage);
        addBotMessage(response);
    }

    function getBotResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        let response = "";

        if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
            response = "Hello! How are you feeling today?";
        } else if (lowerCaseMessage.includes("sad")) {
            response = "I'm sorry to hear that. It's okay to feel sad sometimes. If you need someone to talk to, consider reaching out to a friend or a professional.";
        } else if (lowerCaseMessage.includes("anxious")) {
            response = "I understand. Take a few deep breaths and try to relax. Remember that it's normal to feel anxious at times.";
        } else {
            response = "I'm sorry, I'm not sure how to respond to that. Can you try rephrasing your message?";
        }

        return response;
    }

    document.getElementById("send-button").addEventListener("click", sendMessage);
});
