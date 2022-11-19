function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    // Simple responses
    if (input == "hello" || input == "hi" || input == "hey" || input == "helo" || input == "hii" || input == "hello there") {
        return "Hello there!";
    } else if (input == "goodbye" || input == "bye" || input == "by" || input == "tata") {
        return "Talk to you later!";
    } else if (input == "I love Code Palace!") {
        return "Please Type Here Somthing!";
    } else if (input == "i want to talk with customer care") {
        return "ok wait!....", window.location.href = "file:///home/ai/Downloads/mscbot-main/mscbot/index.html";
    } else {
        return "Try asking something else!";
    }
}