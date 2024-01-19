// import Vue from 'vue'
// import idb from '@/api/idb-nodes';
// import * as Automerge from 'automerge'
// import { v4 as uuidv4 } from 'uuid';
// import { Story } from '@/api/story.js'
// import { HordeClient } from '@/api/horde_client.js'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import {HordeClient} from '@scenaristeur/horde-vue'
import system_prompts from '@/prompts/system_prompts'

console.log("system_prompts", system_prompts)

const state = () => ({
  HordeClient: new HordeClient(
    {api_key: localStorage.getItem('hordeApi') || '0000000000',
    temperature: 0.1,
     max_length:100,
      max_context_length :1024 }),
  lang: null,
  sexe: null,
  type: null,
  system_prompt: null,
  target: { sexe: null, type: null },
  system_prompts: system_prompts,
  uid: undefined,
 response:null,
  server_url: 'http://localhost:3001'

  //   showMenu: false,
  //   showConfig: false,
  //   level: 0,
  //   stories: [],
  //   story: null,
  //   hordeClient: new HordeClient(),
  //   reading: null,
  //   hordeApi: localStorage.getItem('hordeApi') || '0000000000'
})

const mutations = {
  initChat(state, options) {
    state.target = options
    state.target.system_prompt =
      state.system_prompts[state.target.sexe][state.target.type][state.lang]
    console.log(state.target)
    state.sexe = options.sexe
    state.type = options.type
    state.system_prompt = state.system_prompts[state.sexe][state.type][state.lang]
  },
  setResponse(state, r) {
    state.response = r
    console.log(state.response)
  },
  setUid(state, uid) {
    state.uid = uid
    console.log(uid)
  },
  setLang(state, locale) {
    state.lang = locale
    console.log(state.lang)
  },
  changeApi(state, api_key) {
    localStorage.setItem('hordeApi', api_key)
    state.HordeClient.setApiKey(api_key)
  }

  //   createStory(state, options) {
  //     console.log(state, options)
  //     let story = new Story(options)
  //     console.log('STORY', story)
  //     state.story = story
  //     state.stories.push(story)
  //   },
  //   incrementLevel(state) {
  //     state.level = state.level + 1
  //     console.log(state.level)
  //   },
  // setTargetSexe(state, s) {
  //   state.target.sexe = s
  // },
  // setTargetType(state, t) {
  //   state.target.type = t
  // },
  //   showMenu(state, v) {
  //     state.showMenu = v
  //   },
  //   setReading(state, story) {
  //     state.reading = story
  //   },
  //   setShowConfig(state, value) {
  //     state.showConfig = value
  //     console.log(this.setShowConfig)
  //   },
  //   changeApi(state, api) {
  //     localStorage.setItem('hordeApi', api)
  //     state.hordeApi = api
  //   }
}

const actions = {
  async embedGraph(context, input) {
    //let documents = [input]
    let uid = context.state.uid
    if (uid == undefined) {
      uid = uuidv4()
      context.commit('setUid', uid)
    }

    let query = {
      rid: uuidv4(),
      uid: uid,
      documents: input
    }

    await axios
      .post(context.state.server_url+"/embedAndSim", {
        query
      })
      .then((response) => {
        console.log('response', response)
        context.commit('setResponse', response.data)
        // this.messages.push({
        //   role: 'assistant',
        //   content: response.data, // Access the 'data' property of the response object
        // });
        //console.log(this.context.state.allEmbeds)
      })
  }
  //   async publishStory(context, storyName) {
  //     let { story, images } = context.state.story.getClean(storyName)
  //     console.log('Published Story', story)
  //     console.log(images)
  //     context.dispatch('firestore/publishStory', story, { root: true })
  //     context.dispatch(
  //       'firestore/publishImages',
  //       { images: images, story_id: story.id },
  //       { root: true }
  //     )
  //   },
  //   async newUserMessage(context, userMessage) {
  //     context.state.story.onNewUserMessage(userMessage)
  //     await context.dispatch('getCompletion', context.state.story)
  //   },
  //   async getCompletion(context, story) {
  //     story.hordeApiKey = context.state.hordeApi
  //     console.log(context.state, story)
  //     let completion = await context.state.hordeClient.getCompletion(story)
  //     console.log('completion', completion)
  //   }
  // async newDoc(context){
  //   let doc = Automerge.init()
  //   context.commit('setDoc', doc)
  // },
  // addItem(context, text) {
  //   console.log(context.state.doc)
  //   let newDoc = Automerge.change(context.state.doc, doc => {
  //     if (!doc.items) doc.items = []
  //     doc.items.push({ text, done: false })
  //   })
  //   context.commit('updateDoc', newDoc)
  // }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
