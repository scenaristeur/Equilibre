import OpenAI from 'openai';
import 'dotenv/config'

export const askToChatGpt = async function (req, res) {
  /**
   * 1. Create/configure OpenAI Instance
   */
  const openai = new OpenAI({
    // eslint-disable-next-line no-undef
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
  });

  /**
   * 2. Let's talk to chatGPT
   */

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: req.body.message }],
    model: 'gpt-3.5-turbo',
  });
  console.log(chatCompletion)
  console.log(chatCompletion.choices[0].message)
// res.send(chatCompletion.choices[0].message);
      res.send({ from: "chatGpt", data: chatCompletion.choices[0].message });
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
};



