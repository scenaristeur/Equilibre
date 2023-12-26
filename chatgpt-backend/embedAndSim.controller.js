// import OpenAI from 'openai'
import 'dotenv/config'

import { LlamaCppEmbeddings } from "langchain/embeddings/llama_cpp";

const llamaPath = "./models/dolphin-2.2.1-mistral-7b.Q4_0.gguf";

let allEmbeds = []

const embeddings = new LlamaCppEmbeddings({
  modelPath: llamaPath,
});


/*
embedAndSim
req.body.query = {rid:uuid(), uid:uuid(), documents: ["Hello World!", "Bye Bye!", "Bye Bye!!", "Bye Bye!!!"]}

return {query = {rid:uuid(), uid:uuid(), documents: ["Hello World!", "Bye Bye!", "Bye Bye!!", "Bye Bye!!!"], 
embed:[
  [ 22557, 3304, 28808 ],
  [ 2463, 28706, 2463, 28706, 28808 ],
  [ 2463, 28706, 2463, 28706, 3946 ],
  [ 2463, 28706, 2463, 28706, 13915 ]
]
},
allEmbeds: [
  ...
]
*/


export const embedAndSim = async function (req, res) {
  /**
   * 1. Create/configure OpenAI Instance
   */
  // const openai = new OpenAI({
  //   // eslint-disable-next-line no-undef
  //   apiKey: process.env['OPENAI_API_KEY'] // This is the default and can be omitted
  // })

  /**
   * 2. Let's talk to chatGPT
   */



// userid  and requestid
const query= req.body.query  
console.log( query)
// documents to embed



//const documents = ["Hello World!", "Bye Bye!", "Bye Bye!!", "Bye Bye!!!"];

  query.embed = await embeddings.embedDocuments(query.documents);

  console.log(query);
  allEmbeds.unshift(query);


  res.send({rid:query.rid, allEmbeds});


  // const chatCompletion = await openai.chat.completions.create({
  //   // messages: [
  //   //   { role: 'system', content: req.body.system_prompt },
  //   //   { role: 'user', content: req.body.message }
  //   // ],
  //   messages: req.body.messages,
  //   model: 'gpt-3.5-turbo'
  // })
  // console.log(chatCompletion)
  // console.log(chatCompletion.choices[0].message)
  //  res.send(chatCompletion.choices[0].message.content);
  //res.send({ role: 'assistant', data: chatCompletion.choices[0].message })




  
  //   await openAIInstance
  //     .createCompletion({
  //       model: "text-davinci-003",
  //       prompt: req.body.message,
  //       temperature: 0,
  //       max_tokens: 500,
  //     })
  //     .then((response) => {
  //       const repliedMessage = response.data.choices[0].text;
  //       res.send({ from: "chatGpt", data: repliedMessage });
  //     })
  //     .catch((error) => {
  //       // Report error
  //       console.log("Error ", error);
  //     });
}
