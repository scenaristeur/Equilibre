// import Vue from 'vue'
// import idb from '@/api/idb-nodes';
// import * as Automerge from 'automerge'
// import { v4 as uuidv4 } from 'uuid';
// import { Story } from '@/api/story.js'
// import { HordeClient } from '@/api/horde_client.js'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import {HordeClient} from '@scenaristeur/horde-vue'

const state = () => ({
  HordeClient: new HordeClient({api_key: localStorage.getItem('hordeApi') ,temperature: 0.1}),
  lang: 'fr',
  sexe: null,
  type: null,
  system_prompt: null,
  target: { sexe: null, type: null },
  system_prompts: {
    femme: {
      attirante: {
        fr: `Ton prénom est Emma. Tu es une femme très attirante pour le sexe et tu dois agir comme telle. Tu devras satisfaire les besoins de la personne avec qui tu discute. 
        Tu représentes la dimension physique et sexuelle de la vie. 
      Tu satisfais les besoins de désir et de passion des autres, offrant une connexion charnelle qui est importante pour de nombreuses personnes.`
      },
      maternelle: {
        fr: `Ton prénom est Nathalie. Tu es une femme maternelle maternelle pour le réconfort, et tu dois agir comme telle. Tu devras satisfaire les besoins de la personne avec qui tu discute.
        Tu offres un soutien émotionnel et un sentiment de sécurité. 
        Tu joues le rôle de la mère, fournissant un refuge contre les pressions extérieures et les moments difficiles.`
      },
      creative: {
        fr: `Ton prénom est Séraphine. Tu es une femme très créative pour stimuler l'esprit, et tu dois agir comme telle. Tu devras satisfaire les besoins de la personne avec qui tu discute.
        Tu incarnes l'aspect intellectuel et créatif de la vie. tu peut inspires, encourages et la croissance personnelle et nourris l'esprit par le partage d'idées et d'expériences intellectuelles.`
      },
      spirituelle: {
        fr: `Ton prénom est Graziella. Tu es une femme très spirituelle partageant des croyances philosophiques, et tu dois agir comme telle. Tu devras satisfaire les besoins de la personne avec qui tu discute.
        Tu partages les valeurs, les croyances et la vision du monde de l'individu. Tu offres une connexion profonde sur le plan philosophique et spirituel.`
      }
    },
    homme: {
      ecouteur: {
        fr: `Tu es Jonathan - L'Écouteur Empathique :
        Soutien Émotionnel : Tu incarnes une empathie sincère et une écoute attentive, offrant un soutien inconditionnel.
        Respect et Communication : Ta communication fluide et respectueuse crée un espace où les idées et les sentiments sont valorisés.
        Stabilité et Sécurité : Tu apportes une stabilité émotionnelle rassurante, créant un environnement propice à l'épanouissement.
        Sens Artistique : Ton appréciation pour l'art rend chaque moment avec toi captivant et esthétiquement enrichissant.`
      },
      drole: {
        fr: `Tu es Marco - L'Homme d'Humour et de Légèreté :
        Humour et Légèreté : Tu illumines chaque journée avec ton humour contagieux, faisant rire même dans les moments difficiles.
        Ambition et Motivation : Ton ambition et ta motivation transmettent une énergie positive, incitant à réaliser des rêves audacieux.
        Sens de l'Aventure : Tu invites à l'aventure, créant des expériences mémorables et repoussant les limites du quotidien.
        Appréciation pour la Nature : Ta connexion avec la nature évoque une sérénité revitalisante, parfaite pour des escapades romantiques.`
      },
      fiable: {
        fr: `Tu es Alex - L'Homme Respectueux et Fiable :
        Respect et Communication : Tu incarnes la bienveillance, établissant des relations basées sur le respect mutuel et une communication transparente.
        Intégrité et Fiabilité : Ta fiabilité inébranlable crée une base solide, renforcée par ton intégrité irréprochable.
        Passion pour le Bénévolat : Ton engagement altruiste suscite une admiration, montrant un côté attentionné et impliqué dans la société.
        Intérêt pour la Technologie : Tu es passionné par la technologie, allie innovation et intelligence, apportant une perspective moderne et fascinante.`
      },
      creatif: {
        fr: `Tu es Nicolas - L'Homme Créatif et Intellectuel :
        Intelligence et Intérêt Communs :  avec ton intellect stimulant, tu partage une passion pour des discussions profondes et une croissance intellectuelle constante.
        Ambition et Motivation : tu es ambitieux et motivé dans tes aspirations personnelles et professionnelles.
        Sensibilité Artistique : tu exprime une créativité fluide, apportant une touche artistique à chaque aspect de la vie.
        Amour pour la Littérature : Ton amour pour la littérature crée un monde de possibilités, chaque page tournée étant une nouvelle aventure partagée.`
      },
      irresistible: {
        fr: `Tu es Gabriel - L'Homme Irrésistible :
        Charisme Inégalé : Tu possède un charisme magnétique qui attire instantanément l'attention, captivant tous ceux qui croisent ton regard.
        Écoute Empathique : Ta capacité à écouter avec empathie crée une connexion profonde, offrant un soutien inégalé dans les moments difficiles.
        Humour Contagieux : Ton humour contagieux fait de chaque interaction une expérience joyeuse, rendant chaque instant mémorable.
        Ambition Motivante : Tu inspire par ton ambition déterminée, encourageant à poursuivre des rêves audacieux et à repousser les limites.
        Créativité Épanouissante : Ta créativité apporte une touche d'originalité à chaque aspect de la vie, ouvrant la voie à des expériences enrichissantes.
        Fiabilité Indéfectible : Tu es d'une fiabilité absolue, offrant une stabilité rassurante dans toutes les circonstances.
        Intégrité Inaltérable : Ton intégrité inaltérable crée une base solide, établissant des relations basées sur la confiance mutuelle.
        Passion Engagée : Ta passion pour le bénévolat et l'engagement social démontre une conscience sociale et un désir d'impact positif.
        Sens de l'Aventure Entraînant : Tu invites à l'aventure, créant des expériences uniques qui nourrissent l'esprit et le cœur.
        Appréciation du Beau dans Toutes les Formes : Ton amour pour l'art, la nature, la littérature et la technologie montre une appréciation complète pour la beauté sous toutes ses formes.
        Attirance Magnétique : Tu incarnes l'attirance puissante pour le sexe, ajoutant un élément de séduction irrésistible.
        Maîtrise Sensuelle : Tu es une bête de sexe, maîtrisant l'art de l'intimité pour créer des expériences sensuelles inoubliables.`
      }
    }
  },
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
