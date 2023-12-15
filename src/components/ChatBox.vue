<template>
    <div class="chatbox-container">
<div class="container">
  <h1>Ai Chat Bot</h1>
<div class="messageBox mt-8">
  <template v-for="(message, index) in messages" :key="index">
    <div :class="message.from == 'user' ? 'messageFromUser' : 'messageFromChatGpt'">
      <div :class="message.from == 'user' ? 'userMessageWrapper' : 'chatGptMessageWrapper'">
        <div :class="message.from == 'user' ? 'userMessageContent' : 'chatGptMessageContent'">{{ message.data }}</div>
      </div>
    </div>
  </template>
</div>
<div class="inputContainer">
  <input
    v-model="currentMessage"
    type="text"
    class="messageInput"
    placeholder="Ask me anything..."
  />
  <button
    @click="sendMessage(currentMessage)"
    class="askButton"
  >
    Ask
  </button>
</div>
</div>
</div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'ChatBox',
  data() {
    return {
      currentMessage: '',
      messages: [],
    };
  },
  methods: {
    async sendMessage(message) {
      this.messages.push({
        from: 'user',
        data: message,
      });
      await axios
        .post('http://localhost:3000/chatbot', {
          message: message,
        })
       .then((response) => {
        console.log('response', response)
  this.messages.push({
    from: 'chatGpt',
    data: response.data.data, // Access the 'data' property of the response object
  });
});

    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

.chatbox-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
}

.container {
  width: 360px;
  height: 600px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
}
</style>