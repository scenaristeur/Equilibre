<template>
  <div class="chatbox-container">
    <div class="container">
      <h1>
        <!-- <RouterLink @click="$router.go(-1)">X</RouterLink> -->
        <button @click="$router.back()" style="font-size: 30px">&lt;</button>
        {{ titre }}
      </h1>
      <!-- 
      target {{ target }}
      <hr>
      prompt {{ system_prompt }} -->
      <div ref="messageBox" class="messageBox mt-8">
        <template v-for="(message, index) in messages" :key="index">
          <div
            v-if="message.role != 'system'"
            :class="message.role == 'user' ? 'messageFromUser' : 'messageFromChatGpt'"
          >
            <div
              :class="
                message.role == 'user' ? 'userMessageWrapper' : 'chatGptMessageWrapper'
              "
            >
              <div
                :class="
                  message.role == 'user' ? 'userMessageContent' : 'chatGptMessageContent'
                "
              >
                {{ message.content }}
              </div>
            </div>
          </div>
        </template>
        <div
          ref="scrollTarget"
          style="
            height: 40px;
            margin-top: 40px;
            margin-bottom: 40px;
            background-color: rgb(204, 248, 226);
          "
        >
          <span v-if="state != undefined && state.wait_time + state.queue_position > 0">
            {{
              "position: " + state.queue_position + " / délai: " + state.wait_time + "s"
            }}
          </span>
        </div>
      </div>
      <div class="inputContainer">
        <input
          v-on:keyup.enter="sendMessage(currentMessage)"
          v-model="currentMessage"
          type="text"
          class="messageInput"
          :placeholder="$t('chatbox.placeholder')"
          autofocus
        />
        <button @click="sendMessage(currentMessage)" class="askButton">
          {{ $t("chatbox.send") }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import scrollIntoView from "smooth-scroll-into-view-if-needed";

export default {
  name: "ChatBox",
  data() {
    return {
      // titre:'',
      currentMessage: "",
      messages: [],
      //server_url: 'http://localhost:5678/v1/chat/completions2', // using scenaristeur/openai2horde
      //server_url: 'https://api.openai.com/v1/chat/completions',
      server_url: "http://localhost:3001/chatbot", // using chatgpt-backend of this project
    };
  },
  created() {
    this.initMessages();
  },
  methods: {
    async sendMessage(message) {
      this.messages.push({
        role: "user",
        content: message,
      });
      this.scroll();
      // this.messages+=`USER:${message}\n`
      // this.messages+=`ASSISTANT:`
      this.currentMessage = "";
      let response = await this.$store.state.core.HordeClient.send({
        messages: this.messages,
      });
      console.log("HORDECLIENT RESPONSE", response);
      this.messages.push({
        role: "assistant",
        content: response.text, // Access the 'data' property of the response object
      });

      this.scroll();
    },
    scroll() {
      let scrollTarget = this.$refs.scrollTarget;
      // console.log(scrollTarget)
      scrollIntoView(scrollTarget, {
        behavior: "auto",
        scrollMode: "always",
      });
    },
    async sendMessageOpenAi(message) {
      this.messages.push({
        role: "user",
        content: message,
      });
      await axios
        .post(this.server_url, {
          messages: this.messages,
        })
        .then((response) => {
          console.log("response", response);
          this.messages.push({
            role: "assistant",
            content: response.data, // Access the 'data' property of the response object
          });
          console.log(this.messages);
        });
      this.currentMessage = "";
    },
    initMessages() {
      if (this.system_prompt == undefined) {
        this.$router.push("/");
      } else {
        this.messages = [
          { role: "system", content: this.system_prompt },
          { role: "assistant", content: this.$t("chatbox.bonjour") },
        ];

        // let titre = this.sexe+"."+this.type+".titre"
        console.log(this.messages);
        // this.titre = this.$t(titre) //(""+titre)

        // this.messages = `SYSTEM:${this.system_prompt}\n`
        // this.messages+=`ASSISTANT:Bonjour, demande-moi ce que tu veux...`
      }
    },
  },
  watch: {
    sexe() {
      console.log(this.sexe);
    },
    state() {
      console.log(this.state);
      this.scroll();
    },
  },
  // watch:{
  // system_prompt(){
  //   console.log('target', this.system_prompt)
  //   this.initMessages()

  //     // messages: [
  //     //   { role: 'system', content: req.body.system_prompt },
  //     //   { role: 'user', content: req.body.message }
  //     // ],
  // }
  // },

  computed: {
    target() {
      return this.$store.state.core.target;
    },
    sexe() {
      return this.$store.state.core.sexe;
    },
    type() {
      return this.$store.state.core.type;
    },
    system_prompt() {
      return this.$store.state.core.system_prompt;
    },
    state() {
      return this.$store.state.core.HordeClient.state;
    },
    titre() {
      // let titre = this.sexe+"."+this.type+".titre"
      //   console.log(titre, this.messages)
      // let titre = this.sexe+"."+this.type+".titre"
      // console.log(typeof(titre))
      // console.log(this.$t(this.sexe+"."+this.type+".titre") )
      return this.$t(this.sexe + "." + this.type + ".titre");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

.chatbox-container {
  position: fixed;
  bottom: 24px;
  right: 5px;
  z-index: 1000;
}

.container {
  width: 360px;
  height: 95vh;
  /*700px;*/
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
}

h1 {
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: #222;
  padding: 16px;
  margin: 0;
  background-color: #f7f7f7;
  border-bottom: 1px solid #e7e7e7;
}

/*
.messageBox {
  padding: 16px;
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
} */

.messageFromUser,
.messageFromChatGpt {
  display: flex;
}

.messageBox {
  /*max-height: 400px;*/
  height: 500px;
  overflow-y: scroll;
  padding: 0 16px;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  flex-grow: 1;
}

.messageFromUser,
.messageFromChatGpt {
  display: flex;
  margin-bottom: 8px;
}

.userMessageWrapper,
.chatGptMessageWrapper {
  display: flex;
  flex-direction: column;
}

.userMessageWrapper {
  align-self: flex-end;
  width: 100%;
  text-align: right;
}

.chatGptMessageWrapper {
  align-self: flex-start;
}

.userMessageContent,
.chatGptMessageContent {
  /* max-width: 60%;*/
  padding: 8px 12px;
  border-radius: 18px;
  margin-bottom: 2px;
  font-size: 14px;
  line-height: 1.4;
}

.chatGptMessageContent {
  background-color: #1877f2;
  color: white;
  border-top-left-radius: 0;
}

.userMessageContent {
  background-color: #ededed;
  color: #222;
  border-top-right-radius: 0;
}

.userMessageTimestamp,
.chatGptMessageTimestamp {
  font-size: 10px;
  color: #999;
  margin-top: 2px;
}

.userMessageTimestamp {
  align-self: flex-end;
}

.chatGptMessageTimestamp {
  align-self: flex-start;
}

.inputContainer {
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #f0f0f0;
}

.messageInput {
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 12px;
  font-size: 16px;
  background-color: white;
  border-radius: 24px;
  margin-right: 8px;
}

.askButton {
  background-color: #1877f2;
  color: white;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 24px;
  transition: background-color 0.3s ease-in-out;
}

.askButton:hover {
  background-color: #145cb3;
}

@media (max-width: 480px) {
  .container {
    width: 100%;
    max-width: none;
    border-radius: 0;
  }
}

.chatbox-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
}

.messageBox {
  padding: 16px;
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.messageFromUser,
.messageFromChatGpt {
  display: flex;
}
</style>
