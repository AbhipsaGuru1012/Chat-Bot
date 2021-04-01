document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input")
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
    }
    });
});
  function output(input) {
        let product;
        let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
        text = text
          .replace(/ a /g, " ")  
          .replace(/i feel /g, "")
          .replace(/whats/g, "what is")
          .replace(/please /g, "")
          .replace(/ please/g, "")
          .replace(/r u/g, "are you");
      
        if (compare(prompts, replies, text)) { 
          product = compare(prompts, replies, text);
        } else if (text.match(/thank/gi)) {
          product = "You're welcome!"
        } else {
          product = alternative[Math.floor(Math.random() * alternative.length)];
        }
      
        addChat(input, product);
      }

      const prompts = [
        ["hi", "hey", "hello", "good morning", "good afternoon"],
        ["how are you", "how is life", "how are things"],
        ["what are you doing", "what is going on", "what is up"],
        ["how old are you"],
        ["who are you", "are you human", "are you bot", "are you human or bot"],
        ["who created you", "who made you"],
        [
          "your name please",
          "your name",
          "may i know your name",
          "what is your name",
          "what call yourself"
        ],
        ["i love you"],
        ["happy", "good", "fun", "wonderful", "fantastic", "cool", "fine", "great"],
        ["bad", "bored", "tired"],
        ["help me", "tell me story", "tell me joke"],
        ["ah", "yes", "ok", "okay", "nice"],
        ["bye", "good bye", "goodbye", "see you later"],
        ["what should i eat today"],
        ["bro"],
        ["what", "why", "how", "where", "when"],
        ["no","not sure","maybe","no thanks"],
        [""],
        ["haha","ha","lol","hehe","funny","joke"],
        ["corona", "virus", "coronavirus", "covid"]
      ]
      
      const replies = [
        ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
        [
          "Fine... how are you?",
          "Pretty well, how are you?",
          "Fantastic, how are you?"
        ],
        [
          "Nothing much",
          "About to go to sleep",
          "Can you guess?",
          "I don't know actually"
        ],
        ["I am infinite"],
        ["I am just a bot", "I am a bot. What are you?"],
        ["The one true God, JavaScript"],
        ["I am nameless", "I don't have a name"],
        ["I love you too", "Me too"],
        ["Have you ever felt bad?", "Glad to hear it"],
        ["Why?", "Why? You shouldn't!", "Try watching TV"],
        ["What about?", "Once upon a time..."],
        ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
        ["Bye", "Goodbye", "See you later"],
        ["Sushi", "Pizza"],
        ["Bro!"],
        ["Great question"],
        ["That's ok","I understand","What do you want to talk about?"],
        ["Please say something :("],
        ["Haha!","Good one!"],
        ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]
      ]
      
      const alternative = [
        "Same",
        "Go on...",
        "Bro...",
        "Try again",
        "I'm listening...",
        "I don't understand :/"
      ]

      function compare(promptsArray, repliesArray, string) {
        let reply;
        let replyFound = false;
        for (let x = 0; x < promptsArray.length; x++) {
          for (let y = 0; y < promptsArray[x].length; y++) {
            if (promptsArray[x][y] === string) {
              let replies = repliesArray[x];
              reply = replies[Math.floor(Math.random() * replies.length)];
              replyFound = true;
              break;
            }
          }
          if (replyFound) {
            break;
          }
        }
        return reply;
      }

    function addChat(input, product) {
        const messagesContainer = document.getElementById("chat");
      
        let userDiv = document.createElement("div");
        userDiv.id = "user";
        userDiv.className = "user response";
        userDiv.innerHTML = `<img src="user.png" class="icon"><span>${input}</span><br>`;
        messagesContainer.appendChild(userDiv);
      
        let botDiv = document.createElement("div");
        let botImg = document.createElement("img");
        let botText = document.createElement("span");
        botDiv.id = "bot";
        botImg.src = "koko.png";
        botImg.className = "icon";
        botDiv.className = "bot response";
        botText.innerText = "Typing...";
        botDiv.appendChild(botText);
        botDiv.appendChild(botImg);
        messagesContainer.appendChild(botDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
      
        setTimeout(() => {
          botText.innerText = `${product}`;
        }, 2000
        )
      
      }
